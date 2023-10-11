import { added } from "../interfaces/added.js";
export class invoice implements added {
  client: string;
  details: string;
  amount: number;

  constructor(b: string, c: string, d: number) {
    this.client = b;
    this.details = c;
    this.amount = d;
  }

  add() {
    return `${this.client}'s bill is ${this.amount} for ${this.details}`;
  }
}
