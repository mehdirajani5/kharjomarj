import { Component, OnInit } from '@angular/core';
import { Income } from 'src/app/models/income';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  expand: boolean;

  /**
   * List of earns.
   */
  earns: Income[] = [];

  /**
   * income form.
   */
  earnForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /**
     * Setup income form.
     */
    this.earnForm = this.formBuilder.group({
      name: [null, Validators.required],
      amount: [null, Validators.required],
      date: [null, Validators.required],
      description: [null, Validators.required],
    });
    /**
     * Load all earns.
     */
    this.loadEarns();
  }

  /**
   * Load earns from localstorage.
   */
  loadEarns() {
    if (localStorage.getItem('earns')) {
      for (const item of JSON.parse(localStorage.getItem('earns'))) {
        this.earns.push(new Income(item.name, item.amount, item.date, item.description));
      }
    }
  }

  /**
   * Save earns to localstorage.
   */
  saveEarns(): void {
    localStorage.setItem('earns', JSON.stringify(this.earns));
  }

  /**
   * Add an income amount.
   */
  addEarn(): void {
    const data = this.earnForm.value;
    this.earns.unshift(new Income(data.name, data.amount, data.date, data.description));
    this.saveEarns();
    this.earnForm.reset();
  }

  /**
   * Delete an income and save to local storage.
   */
  deleteEarn(earn: Income): void {
    if (!confirm('Are you you want to delete this income?')) {
      return;
    }
    this.earns.splice(this.earns.indexOf(earn), 1);
    this.saveEarns();
  }

  get total() {
    let sum = 0;
    for (const total of this.earns) {
      sum += total.amount;
    }
    return sum;
  }
}
