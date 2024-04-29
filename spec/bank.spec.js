import BankAccount from "../src/BankAccount.js";

describe("Bank Tests:", () => {

    describe("User story 1: ", () => {

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
        
    })
})