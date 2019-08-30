import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  collapse: boolean;

  /**
   * List of incomes
   */
  incomes: Income[] = [];

  /**
   * income form
   */
  incomeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /**
     * Setup income form
     */
    this.incomeForm = this.formBuilder.group({
      name: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      description: [null, Validators.required],
    });
    /**
     * Load all incomes
     */
    this.loadIncomes();
  }

  /**
   * Load incomes from localstorage
   */
  loadIncomes() {
    if (localStorage.getItem('incomes')) {
      for (const item of JSON.parse(localStorage.getItem('incomes'))) {
        this.incomes.push(new Income(item.name, item.amount, item.date, item.description));
      }
    }
  }

  /**
   * Save incomes to localstorage
   */
  saveIncomes(): void {
    localStorage.setItem('incomes', JSON.stringify(this.incomes));
  }

  /**
   * Add an income amount
   */
  addIncome(): void {
    const data = this.incomeForm.value;
    this.incomes.unshift(new Income(data.name, data.amount, data.date, data.description));
    this.saveIncomes();
    this.incomeForm.reset();
  }

  /**
   * Delete an income and save to local storage
   */
  deleteIncome(income: Income): void {
    if (!confirm('Are you sure you want to delete this income?')) {
      return;
    }
    this.incomes.splice(this.incomes.indexOf(income), 1);
    this.saveIncomes();
  }

  /**
   * Get total incomes
   */
  get total() {
    let sum = 0;
    for (const total of this.incomes) {
      sum += total.amount;
    }
    return sum;
  }
}
