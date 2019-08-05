import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

import { HttpClientModule } from '@angular/common/http';
import { CartsummaryComponent } from './store/cartsummary/cartsummary.component';
import { Cart } from './model/cart';


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    StoreModule,
    HttpClientModule
  ],
  providers: [
  Cart
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
