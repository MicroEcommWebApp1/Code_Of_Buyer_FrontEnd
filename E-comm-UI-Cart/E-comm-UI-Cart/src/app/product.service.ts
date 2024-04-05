import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

const BASIC_URL=['http://localhost:8082']
@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  public getProductById(productId:any){
    return this.http.get<Product>(`http://localhost:8082/products/getProductDetailsById/${productId}`);
  }
  public getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8082/products/getAllProducts");
  }
  public getAllSaree(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/apparel/women/saree");
  }

  public getAllKurthi(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/apparel/women/kurthi");
  }

  public getAllJean(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/apparel/men/jean");
  }

  public getAllShirt(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/apparel/men/shirt");
  }
  public getAllApple(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/gadgets/mobile/apple");
  }
  public getAllSamsung(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/gadgets/mobile/samsung");
  }
  public getAllBoat(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/gadgets/earphone/boat");
  }
  public getAllNoise(){
    return this.http.get<Product[]>("http://localhost:8082/products/getProductsBySubCategory/gadgets/earphone/noise");
  }

}
