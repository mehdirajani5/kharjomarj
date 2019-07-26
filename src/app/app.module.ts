import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SpendComponent } from './components/shared/spend/spend.component';
import { EarnComponent } from './components/shared/earn/earn.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
