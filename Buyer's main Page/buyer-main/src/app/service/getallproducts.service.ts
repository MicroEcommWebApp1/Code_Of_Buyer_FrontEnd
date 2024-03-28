import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';


const BASIC_URL=['http://localhost:8080']
@Injectable({
  providedIn: 'root'
})
export class GetallproductsService {

  constructor(private http:HttpClient) { }

  public getProductById(product_id:any){
    return this.http.get<Product>("http://localhost:8080/products/getProductDetailsById/"+product_id);
  }

  public getAllProducts(){
    return this.http.get<Product[]>("http://localhost:8080/products/getAllProducts");
  }

  public getAllApparel()
  {
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsByCategory/apparel")
  }
  public getAllGadgets()
  {
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsByCategory/gadgets")
  }

  public getAllMen(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/{category}/{subcategory1}")
  }
  public getAllSaree(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/apparel/women/saree");
  }

  public getAllKurthi(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/apparel/women/kurthi");
  }

  public getAllJean(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/apparel/men/jean");
  }

  public getAllShirt(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/apparel/men/shirt");
  }
  public getAllApple(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/gadgets/mobile/apple");
  }
  public getAllSamsung(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/gadgets/mobile/samsung");
  }
  public getAllBoat(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/gadgets/earphone/boat");
  }
  public getAllNoise(){
    return this.http.get<Product[]>("http://localhost:8080/products/getProductsBySubCategory/gadgets/earphone/noise");
  }

}


