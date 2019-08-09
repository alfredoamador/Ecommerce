import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { Product } from 'src/app/model/product';
import { Cart } from 'src/app/model/cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
private id;
  constructor(private route:ActivatedRoute, private serviceee:ProductRepositoryService,private cart:Cart) { }

  ngOnInit() {

  }
get productdetail():Product[]{
 const fi= this.route.snapshot.paramMap.get('id');
console.log(fi);
return this.serviceee.getproductdetail(fi);
}

addlinec(product:Product){
this.cart.addLine(product);
}
}
