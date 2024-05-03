export default class Transaction {
    #date
    #debit
    #credit
    #currentBalance

    constructor(credit, debit, balance) {
        this.#date = this.createDate();
        this.#debit = debit;
        this.#credit = credit;
        this.#currentBalance = balance;
    }

    print = () => {
        console.log(`${this.#date} || ` + `${this.#credit.toFixed(2)}`.padEnd(8,' ') + `|| ` + `${this.#debit.toFixed(2)}`.padEnd(8, ' ') + `|| ` + `${this.#currentBalance.toFixed(2)}`);
    }

    createDate = () => {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }

    getDate = () => this.#date;
    getDebit = () => this.#debit;
    getCredit = () => this.#credit;
    getCurrentBalance = () => this.#currentBalance;
}