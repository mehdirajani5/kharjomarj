import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Expense } from 'src/app/models/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  collapse = false;

  /**
   * List of expenses
   */
  expenses: Expense[] = [];

  /**
   * Expense form
   */
  expenseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    /**
     * Setup expense form
     */
    this.expenseForm = this.formBuilder.group({
      name: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      description: [null, Validators.required],
    });

    /**
     * Load all expenses
     */
    this.loadExpenses();
  }

  /**
   * Load expenses from localstorage
   */
  loadExpenses() {
    if (localStorage.getItem('expenses')) {
      for (const item of JSON.parse(localStorage.getItem('expenses'))) {
        this.expenses.push(new Expense(item.name, item.amount, item.date, item.description));
      }
    }
  }

  /**
   * Save expenses to localstorage
   */
  saveExpenses(): void {
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }

  /**
   * Add an expense amount
   */
  addExpense(): void {
    const data = this.expenseForm.value;
    this.expenses.unshift(new Expense(data.name, data.amount, data.date, data.description));
    this.saveExpenses();
    this.expenseForm.reset();
  }

  /**
   * Delete an expense and save to local storage
   */
  deleteExpense(expense: Expense): void {
    if (!confirm('Are you sure you want to delete this expense?')) {
      return;
    }
    this.expenses.splice(this.expenses.indexOf(expense), 1);
    this.saveExpenses();
  }

  /**
   * Get total expenses
   */
  get total() {
    let sum = 0;
    for (const total of this.expenses) {
      sum += total.amount;
    }
    return sum;
  }
}
