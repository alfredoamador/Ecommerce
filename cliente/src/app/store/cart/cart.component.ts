import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public cart:Cart) { }
private cartes;
  ngOnInit() {
  }

  get productcart():any[]{
     this.cartes=this.cart.getproductsCart();
     return this.cartes;
  }

  addcart(product:Product,canti:number){
  
  this.cart.changequantity(product,+canti);
  }
  deleteproductos(product:Product)
  {
    
    this.cart.deleteproduct(product);
  }

}
