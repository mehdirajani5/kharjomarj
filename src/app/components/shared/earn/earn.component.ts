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
      name: [null],
      amount: [null],
      date: [null],
      description: [null],
    });
  }

}
