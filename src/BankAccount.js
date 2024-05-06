import Transactions from "./Transactions.js";

export default class BankAccount {
    #name
    #balance
    #transactions = new Transactions
    #overdraftAmount = 0
    #overdraft

    constructor(name, balance = 0) {
        this.#name = name;
        this.#overdraft = false;
        balance >= 0 ? this.#balance = balance : this.#balance = 0;
    }

    getName = () => this.#name;

    getBalance = () => this.#balance;

    getTransactions = () => this.#transactions.getTransactions();

    deposit = (amount) => {
        amount >= 0 ? this.#balance += amount : '';
        this.#transactions.addTransaction(amount, 0, this.#balance);
    }

    withdraw = (amount) => {
        if (amount > (this.#balance + this.#overdraftAmount)) {
            console.error("You do not have enough funds for this withdrawal");
            return ;
        } 
        amount >= 0 ? this.#balance -= amount : '';
        this.#transactions.addTransaction(0 , amount, this.#balance);
    }

    printStatement = () => this.#transactions.printStatement();

    getOverdraft = () => this.#overdraft;

    getOverdraftAmount = () => this.#overdraftAmount;

    setOverdraft = (mode) => this.#overdraft = mode;

    setOverdraftAmount = (amount) => this.#overdraft ? this.#overdraftAmount = amount : console.log("Overdraft is not enabled for this account");

}