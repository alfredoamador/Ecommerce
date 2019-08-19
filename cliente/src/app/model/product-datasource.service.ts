import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const PROTOCOL ='http';
@Injectable({
  providedIn: 'root'
})
export class ProductDatasourceService {
private baseUrl:string;

  constructor(private httpClient:HttpClient) { 
    this.baseUrl= `${PROTOCOL}://${location.hostname}:/ecommerce/api`;
  

  };
     
    getProducts(): any{

      return this.httpClient.get(this.baseUrl+'/products');
      
    }  
    getDepartaments(): any{

      return this.httpClient.get(this.baseUrl+'/productline');
      
    } 
    getorders():any {
      return this.httpClient.get(this.baseUrl+'/orders');
    }
    getordersdetail():any {
      return this.httpClient.get(this.baseUrl+'/orderdetail');
    }
}
