export default class BankAccount {
    #name
    #balance

    constructor(name, balance = 0) {
        this.#name = name;
        balance >= 0 ? this.#balance = balance : this.#balance = 0;
    }

    getName = () => this.#name;

    getBalance = () => this.#balance;

    deposit = (amount) => {
        amount >= 0 ? this.#balance += amount : '';
    }
}