import Transaction from "./Transaction.js";

export default class Transactions {
    #transactions = [];

    addTransaction = (credit, debit, balance) => {
        this.#transactions.push(new Transaction(credit, debit, balance));
    }

    getTransactions = () => this.#transactions;

    printStatement = () => {
        console.log('date       || credit  || debit   || balance');
        this.#transactions.reverse().forEach((transaction) => {
            transaction.print();
        });
    }
}