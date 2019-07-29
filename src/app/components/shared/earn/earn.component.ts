import { Component, OnInit } from '@angular/core';
import { Earn } from 'src/app/services/earn';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-earn',
  templateUrl: './earn.component.html',
  styleUrls: ['./earn.component.scss']
})
export class EarnComponent implements OnInit {

  /**
   * List of earns.
   */
  earns: Earn[] = [];

  /**
   * earn form.
   */
  earnForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    /**
     * Setup earn form.
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
        this.earns.push(new Earn(item.name, item.amount, item.date, item.description));
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
   * Add an earn amount.
   */
  addEarn(): void {
    const data = this.earnForm.value;
    this.earns.unshift(new Earn(data.name, data.amount, data.date, data.description));
    this.saveEarns();
    this.earnForm.reset();
  }

  /**
   * Delete an earn and save to local storage.
   */
  deleteEarn(earn: Earn): void {
    if (!confirm('Are you you want to delete this earn?')) {
      return;
    }
    this.earns.splice(this.earns.indexOf(earn), 1);
    this.saveEarns();
  }
}
