export class Earn {
  name: string;
  amount: number;
  date: Date;
  description: string;

  constructor(name: string, amount: number, date: Date, description: string) {
    this.name = name;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }
}
