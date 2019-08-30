import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ExpenseComponent } from 'src/app/shared/expense/expense.component';
import { IncomeComponent } from 'src/app/shared/income/income.component';
import { TotalComponent } from 'src/app/shared/total/total.component';

const routes: Routes = [{
  path: '',
  component: AppComponent,
}, {
  path: 'income',
  component: IncomeComponent,
}, {
  path: 'total',
  component: TotalComponent,
}, {
  path: 'expense',
  component: ExpenseComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
