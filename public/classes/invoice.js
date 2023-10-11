export class invoice {
    constructor(b, c, d) {
        this.client = b;
        this.details = c;
        this.amount = d;
    }
    add() {
        return `${this.client}'s bill is ${this.amount} for ${this.details}`;
    }
}
