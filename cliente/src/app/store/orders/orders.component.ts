import { Component, OnInit } from '@angular/core';

import { ProductRepositoryService } from 'src/app/model/product-repository.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private Services:ProductRepositoryService) { }

  ngOnInit() {
  
  }
get order():any[]{
return  this.Services.getorder();
}




}
