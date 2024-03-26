import { Component, OnInit } from '@angular/core';
import { GetallproductsService } from '../service/getallproducts.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

 ngOnInit():void{
  this.displayProducts();
 }
  constructor(private productService:GetallproductsService){ }
  data!:Product[];

  displayProducts(){
    this.productService.getAllProducts().subscribe(res=>{
      this.data=res;
      console.log(res);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
}
