import BankAccount from "./BankAccount.js";

let testAccount = new BankAccount("john smith");

testAccount.deposit(2000);
testAccount.deposit(500);
testAccount.withdraw(800);

testAccount.printStatement();