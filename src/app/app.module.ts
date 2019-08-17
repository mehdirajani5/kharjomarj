import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { CollapseModule } from 'ngx-bootstrap';
import { AddComponent } from 'src/app/components/shared/add/add.component';
import { ExpenseComponent } from 'src/app/components/shared/expense/expense.component';
import { IncomeComponent } from 'src/app/components/shared/income/income.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ExpenseComponent,
    IncomeComponent,
    AddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  static readonly icons = [
    faPlus,
    faTrash,
  ];

  constructor() {
    for (const icon of AppModule.icons) {
      library.add(icon);
    }
  }
}
