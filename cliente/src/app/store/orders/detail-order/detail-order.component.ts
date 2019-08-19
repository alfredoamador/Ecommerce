import { Component, OnInit } from '@angular/core';
import { ProductRepositoryService } from 'src/app/model/product-repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-order',
  templateUrl: './detail-order.component.html',
  styleUrls: ['./detail-order.component.css']
})
export class DetailOrderComponent implements OnInit {
  private id;
  private cartes;
  constructor(private serv:ProductRepositoryService,private route: ActivatedRoute) { }
private joel:number=10100;
  ngOnInit() {
    console.log();
  }



get detail():any[]{
  const ide = this.route.snapshot.paramMap.get("id");
  this.id=ide;
   this.cartes= this.serv.getdetailorder(this.id);
   console.log(this.cartes)
    return this.cartes;
}

}
