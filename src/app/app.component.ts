import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * Page tabs
   * Tab names will be converted to uppercase.
   */
  readonly tabs: string[] = [
    'income',
    'total',
    'expense',
  ];
}
