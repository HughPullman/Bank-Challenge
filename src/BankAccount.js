import Transactions from "./Transactions.js";

export default class BankAccount {
    #name
    #balance
    #transactions = new Transactions

    constructor(name, balance = 0) {
        this.#name = name;
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
        if (amount > this.#balance) {
            console.error("You do not have enough funds for this withdrawal");
            return ;
        } 
        amount >= 0 ? this.#balance -= amount : '';
        this.#transactions.addTransaction(0 , amount, this.#balance);
    }

    printStatement = () => this.#transactions.printStatement();

}