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
        let green = "\u001b[32m";
        let red = "\u001b[31m";
        let clear = "\x1b\[0m"
        let balanceColor;
        if (this.#currentBalance >= 0) {
            balanceColor = green + this.#currentBalance.toFixed(2) + clear;
        } else {
            balanceColor = red + this.#currentBalance.toFixed(2) + clear;
        }
        let credit = green + this.#credit.toFixed(2).padEnd(8,' ') + clear;
        let debit = red + this.#debit.toFixed(2).padEnd(8, ' ') + clear;
        console.log(`${this.#date} || ` + `${credit}` + `|| ` + `${debit}` + `|| ` + `${balanceColor}`);
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