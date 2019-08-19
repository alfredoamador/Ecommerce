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
private cartes;
constructor(private route: ActivatedRoute,private servicesreposi:ProductRepositoryService,private cart:Cart) { }

  ngOnInit() {
    


  }


get productcart():Product[]{
  const ide = this.route.snapshot.paramMap.get("id");
  this.id=ide;
   this.cartes=this.servicesreposi.getProductsdetail(this.id);
    return this.cartes;
}
addlinec(product:Product){
this.cart.addLine(product);
}

}
