import { Injectable } from '@angular/core';
import {Product} from './product';
@Injectable()
export class Cart {
   public lines:CartLine[]=[]; 
   public itemCount =0;
  public cartPrice=0;
public joel:Product[]=[];
    addLine(product:Product,quantity:number=1){
   
        const lines=this.lines.find(line=>line.product.productCode===product.productCode);
        if(lines==undefined){
            this.lines.push(new CartLine(product,quantity));
          
            }else{
                lines.quantity+=quantity;

                }
                this.recalculate();
           
               
    }
    getproductsCart(){
       
    return this.lines;
    }

deleteproduct(product:Product){
    const line=this.lines.findIndex(line=>line.product.productCode===product.productCode);
    if(line!=undefined){
        this.lines.splice(line,1);
        this.recalculate();
            }
}

    changequantity(product:Product,cue:number ){
        const line=this.lines.find(line=>line.product.productCode===product.productCode);
        if(line!=undefined){
            line.quantity=cue;
       this.recalculate();
            }
    }

    getcuantity(){
       
        return this.lines.map(p=>p.product);
        }
    recalculate(){
        this.itemCount=0;
        this.cartPrice=0;
        this.lines.forEach(l=>{
         this.itemCount=this.itemCount+l.quantity;
            this.cartPrice+=(l.quantity*l.product.MSRP);
        });


    }

}
export class CartLine{
    constructor(
        public product:Product,
        public quantity:number=1){


    }
    get lineTotal():number{
        return this.quantity*this.product.MSRP;
    }
}