import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { EarnComponent } from './components/shared/earn/earn.component';
import { SpendComponent } from './components/shared/spend/spend.component';
import { TotalComponent } from './components/shared/total/total.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpendComponent,
    EarnComponent,
    TotalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  static readonly icons = [
    faPlus,
  ];

  constructor() {
    for (const icon of AppModule.icons) {
      library.add(icon);
    }
  }
}
