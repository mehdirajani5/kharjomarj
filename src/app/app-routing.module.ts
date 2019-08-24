import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ExpenseComponent } from 'src/app/components/shared/expense/expense.component';
import { IncomeComponent } from 'src/app/components/shared/income/income.component';
import { TotalComponent } from 'src/app/components/shared/total/total.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
}, {
  path: 'incomes',
  component: IncomeComponent,
}, {
  path: 'total',
  component: TotalComponent,
}, {
  path: 'expenses',
  component: ExpenseComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
