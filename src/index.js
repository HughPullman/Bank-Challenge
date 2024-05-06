import BankAccount from "./BankAccount.js";

const myAccount = new BankAccount("Hugh Pullman");


myAccount.deposit(500);
console.log("Deposit 500 ...");

console.log("Check my statement: \n");
myAccount.printStatement();

console.log("\nDeposit another 1000 ... ");
myAccount.deposit(1000);

console.log("Check new statement: \n");
myAccount.printStatement();

console.log("\nWithdraw 600 ... ");
myAccount.withdraw(600);

console.log("Check new statement: \n");
myAccount.printStatement();

console.log("\nAttempt to withdraw 1200 ... \n");
myAccount.withdraw(1200);

console.log("\nSet up overdraft of 1000");
myAccount.setOverdraft(true);
myAccount.setOverdraftAmount(1000);

console.log("Withdraw 1200 ...");
myAccount.withdraw(1200);

console.log("Check new statement: \n");
myAccount.printStatement();

console.log("\nAttempt to withdraw another 1000 ... \n");
myAccount.withdraw(1000);

