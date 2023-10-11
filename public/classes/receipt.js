export class receipt {
    constructor(b, c, d) {
        this.client = b;
        this.details = c;
        this.amount = d;
    }
    add() {
        return `${this.client} payed ${this.amount} for $${this.details}`;
    }
}
