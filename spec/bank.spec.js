import BankAccount from "../src/BankAccount.js";

describe("Bank Tests:", () => {

    describe("User Story 1: ", () => {

        it("should create a new instance of BankAccount class", () => {
            // Arrange
            // Act
            const testAccount = new BankAccount();
            // Assert
            // Result
            expect(testAccount).toBeInstanceOf(BankAccount);
        });

        it("should have an account name property that is set on creation", () => {
            // Arrange
            // Act
            const testAccount = new BankAccount("testName");
            // Assert
            // Result
            expect(testAccount.getName()).toBe("testName");
        });

        it("should have a balance property that is initialized at 0", () => {
            // Arrange
            // Act
            const testAccount = new BankAccount();
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(0);
        });

        it("should be able to initialize with a balance above 0", () => {
            // Arrange
            const expected = 100
            // Act
            const testAccount = new BankAccount('testName', expected);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

        it("should not be able to initialize with a balance below 0", () => {
            // Arrange
            const expected = 0
            // Act
            const testAccount = new BankAccount('testName', -100);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });
    });

    describe("User Story 2: ", () => {

        let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
        });

        afterEach(() => {
            testAccount = undefined;
        });
        
        it("should increase the balance value by the correct amount when deposit() is called", () => {
            // Arrange
            const expected = 100;
            // Act
            testAccount.deposit(expected);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

        it("should not be able to deposit a negative amount", () => {
            // Arrange
            const expected = testAccount.getBalance();
            // Act
            testAccount.deposit(-100);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

        it("should only be able to deposit a number value", () => {
            // Arrange
            const expected = testAccount.getBalance();
            // Act
            testAccount.deposit('test')
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });
        
        it("should update the balance correctly for multiple deposits", () => {
            // Arrange
            const expected = 250;
            // Act
            testAccount.deposit(100);
            testAccount.deposit(150);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });
    });

    describe("User Story 3: ", () => {
        
        let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount', 500);
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("should decrease the balance of the account by the amount withdrawn", () => {
            // Arrange
            const expected = testAccount.getBalance() - 100;
            // Act
            testAccount.withdraw(100);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        })

        it("should not be able to withdraw a negative amount", () => {
            // Arrange
            const expected = testAccount.getBalance();
            // Act
            testAccount.withdraw(-100);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

        it("should decrease the balance properly when multiple withdrawals are made", () => {
            // Arrange
            const expected = testAccount.getBalance() - 250;
            // Act
            testAccount.withdraw(100);
            testAccount.withdraw(150);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

    });

    describe("User Story 4: ", () => {

         let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount', 200);
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("doesn't lower balance if user withdrawal amount is more than balance", () => {
            // Arrange
            const expected = testAccount.getBalance();
            // Act
            testAccount.withdraw(300);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        })
    });

    describe("User Story 5: ", () => {

         let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("should contain all previous transactions in the transactions property", () => {
            // Arrange
            let expected = 3;
            // Act
            testAccount.deposit(1000);
            testAccount.withdraw(300);
            testAccount.deposit(200);
            // Assert
            // Result
            expect(testAccount.getTransactions().length).toBe(expected);
        })

        it("each transaction should have all the correct data", () => {
            // Arrange
            // Act
            testAccount.deposit(1000);
            // Assert
            // Result
            expect(testAccount.getTransactions()[0].getCredit()).toBe(1000);
            expect(testAccount.getTransactions()[0].getDebit()).toBe(0);
            expect(testAccount.getTransactions()[0].getCurrentBalance()).toBe(1000);
        })

        it("should have the data in the order it was input", () => {
            // Arrange
            // Act
            testAccount.deposit(1000);
            testAccount.withdraw(300);
            testAccount.deposit(200);
            // Assert
            // Result
            expect(testAccount.getTransactions()[0].getCredit()).toBe(1000);
            expect(testAccount.getTransactions()[0].getDebit()).toBe(0);
            expect(testAccount.getTransactions()[0].getCurrentBalance()).toBe(1000);

            expect(testAccount.getTransactions()[1].getCredit()).toBe(0);
            expect(testAccount.getTransactions()[1].getDebit()).toBe(300);
            expect(testAccount.getTransactions()[1].getCurrentBalance()).toBe(700);

            expect(testAccount.getTransactions()[2].getCredit()).toBe(200);
            expect(testAccount.getTransactions()[2].getDebit()).toBe(0);
            expect(testAccount.getTransactions()[2].getCurrentBalance()).toBe(900);
        })
    });

    describe("User Story 6: ", () => {

        let testAccount;
        let testDate;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            testDate = today;
        });

        afterEach(() => {
            testAccount = undefined;
            testDate = undefined;
        });

        it("should print the correct transactions to the console when called", () => {
            // Arrange
            // Act
            let logSpy = spyOn(console, "log");
            testAccount.deposit(2000);
            testAccount.deposit(500);
            testAccount.withdraw(800);
            testAccount.printStatement();
            // Assert
            // Result
            expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m0.00    \x1b\[0m|| \u001b[31m800.00  \x1b\[0m|| \u001b[32m1700.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m500.00  \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2500.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m2000.00 \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2000.00\x1b\[0m`);
        });

        it("should print multiple transactions in reverse order than they were added", () => {
            // Arrange
            // Act
            let logSpy = spyOn(console, "log");
            testAccount.deposit(1000);
            testAccount.deposit(300);
            testAccount.withdraw(700);
            testAccount.printStatement();
            // Assert
            // Result
            expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m0.00    \x1b\[0m|| \u001b[31m700.00  \x1b\[0m|| \u001b[32m600.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m300.00  \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m1300.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m1000.00 \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m1000.00\x1b\[0m`);
        });
    });

    describe("User Story 7: ", () => {

        let testAccount;
        let testDate;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            testDate = today;
        });

        afterEach(() => {
            testAccount = undefined;
            testDate = undefined;
        });

        it("should print the positive balance and credit in green", () => {
            // Arrange
            // Act
            let logSpy = spyOn(console, "log");
            testAccount.deposit(2000);
            testAccount.deposit(500);
            testAccount.withdraw(800);
            testAccount.printStatement();
            // Assert
            // Result
            expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m0.00    \x1b\[0m|| \u001b[31m800.00  \x1b\[0m|| \u001b[32m1700.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m500.00  \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2500.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m2000.00 \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2000.00\x1b\[0m`);
        });

        // it("should print multiple transactions in reverse order than they were added", () => {
        //     // Arrange
        //     // Act
        //     let logSpy = spyOn(console, "log");
        //     testAccount.deposit(1000);
        //     testAccount.deposit(300);
        //     testAccount.withdraw(700);
        //     testAccount.printStatement();
        //     // Assert
        //     // Result
        //     expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 0.00    || 700.00  || 600.00`);
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 300.00  || 0.00    || 1300.00`);
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 1000.00 || 0.00    || 1000.00`);
        // });
    });

    describe("User Story 8: ", () => {

        let testAccount;
        let testDate;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();

            today = mm + '/' + dd + '/' + yyyy;
            testDate = today;
        });

        afterEach(() => {
            testAccount = undefined;
            testDate = undefined;
        });

        it("should print the negative balance and credit in red", () => {
            // Arrange
            // Act
            let logSpy = spyOn(console, "log");
            testAccount.deposit(2000);
            testAccount.deposit(500);
            testAccount.withdraw(800);
            testAccount.printStatement();
            // Assert
            // Result
            expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m0.00    \x1b\[0m|| \u001b[31m800.00  \x1b\[0m|| \u001b[32m1700.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m500.00  \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2500.00\x1b\[0m`);
            expect(logSpy).toHaveBeenCalledWith(`${testDate} || \u001b[32m2000.00 \x1b\[0m|| \u001b[31m0.00    \x1b\[0m|| \u001b[32m2000.00\x1b\[0m`);
        });

        // it("should print multiple transactions in reverse order than they were added", () => {
        //     // Arrange
        //     // Act
        //     let logSpy = spyOn(console, "log");
        //     testAccount.deposit(1000);
        //     testAccount.deposit(300);
        //     testAccount.withdraw(700);
        //     testAccount.printStatement();
        //     // Assert
        //     // Result
        //     expect(logSpy).toHaveBeenCalledWith('date       || credit  || debit   || balance');
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 0.00    || 700.00  || 600.00`);
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 300.00  || 0.00    || 1300.00`);
        //     expect(logSpy).toHaveBeenCalledWith(`${testDate} || 1000.00 || 0.00    || 1000.00`);
        // });
    });

    describe("User Story 9: ", () => {

        let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("should allow the overdraft to be set to true", () => {
            // Arrange
            let expected = true;
            // Act
            testAccount.setOverdraft(true);
            // Assert
            // Result
            expect(testAccount.getOverdraft()).toBe(expected);
        });

        it("should allow an overdraft amount to be set when overdraft is true", () => {
            // Arrange
            let expected = 1000;
            // Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraftAmount(1000)
            // Assert
            // Result
            expect(testAccount.getOverdraftAmount()).toBe(expected);
        });

        it("should not allow an overdraft amount to be set when overdraft is false", () => {
            // Arrange
            let expected = 0;
            // Act
            testAccount.setOverdraft(false);
            testAccount.setOverdraftAmount(1000);
            // Assert
            // Result
            expect(testAccount.getOverdraftAmount()).toBe(expected);
        });
    });

    describe("User Story 10: ", () => {

        let testAccount;
        beforeEach(() => {
            testAccount = new BankAccount('testAccount');
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("should allow the user to withdraw up to the overdraft", () => {
            // Arrange
            let expected = -800;
            // Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraftAmount(1000);
            testAccount.withdraw(800);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });

        it("should not allow more than the overdraft amount to be withdrawn", () => {
            // Arrange
            let expected = -500;
            // Act
            testAccount.setOverdraft(true);
            testAccount.setOverdraftAmount(1000)
            testAccount.withdraw(500);
            testAccount.withdraw(1500);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        });
    });
})