import { added } from "../interfaces/added.js";
export class receipt implements added {
  client: string;
  details: string;
  amount: number;

  constructor(b: string, c: string, d: number) {
    this.client = b;
    this.details = c;
    this.amount = d;
  }

  add() {
    return `${this.client} payed ${this.amount} for $${this.details}`;
  }
}
