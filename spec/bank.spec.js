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
            testAccount = new BankAccount('testAccount', 200);
        });

        afterEach(() => {
            testAccount = undefined;
        });

        it("", () => {
            // Arrange
            const expected = testAccount.getBalance();
            // Act
            testAccount.withdraw(300);
            // Assert
            // Result
            expect(testAccount.getBalance()).toBe(expected);
        })
    });

})