import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ɵROUTER_PROVIDERS,RouterModule, Routes } from '@angular/router';
import { CartComponent } from './store/cart/cart.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreComponent } from './store/store.component';
import { PageNotFoundComponent } from './store/page-not-found/page-not-found.component';

import { DetailComponent } from './store/detail/detail.component';
import { OrdersComponent } from './store/orders/orders.component';
import { DetailOrderComponent } from './store/orders/detail-order/detail-order.component';

const routes:Routes=[

  {path:'store',component:StoreComponent},
  {path:'store/:id',component:DetailComponent},
  {path:'order/:id',component:DetailOrderComponent},
  {path: 'order',component:OrdersComponent},
  {path:'cart',component:CartComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'',redirectTo:'/store',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
]; 

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
  
})
export class AppRoutingModule {
  
 }
