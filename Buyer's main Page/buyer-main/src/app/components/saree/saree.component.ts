import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-saree',
  templateUrl: './saree.component.html',
  styleUrls: ['./saree.component.css']
})
export class SareeComponent implements OnInit{

  
 ngOnInit():void{
  this.displayProducts();
 }
  constructor(private productService:GetallproductsService){ }
  data!:Product[];

  displayProducts(){
    this.productService.getAllSaree().subscribe(res=>{
      this.data=res;
      console.log(res);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
}
