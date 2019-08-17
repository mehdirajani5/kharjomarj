export class Expense {
  name: string;
  amount: number;
  date: Date;
  description: string;
  collapse: boolean;

  constructor(name: string, amount: number, date: Date, description: string) {
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }
}
