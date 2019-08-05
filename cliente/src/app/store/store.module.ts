import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CartsummaryComponent } from './cartsummary/cartsummary.component';
import { Cart } from '../model/cart';


@NgModule({
  declarations: [StoreComponent, NavComponent, FooterComponent,CartsummaryComponent],
  imports: [
    CommonModule
  ],
  exports:[
    StoreComponent,
    
  ],
  providers:[
    Cart
  ],
})
export class StoreModule { }
