import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.component.html',
  styleUrls: ['./samsung.component.css']
})
export class SamsungComponent {
  ngOnInit():void{
    this.displayProducts();
   }
    constructor(private productService:GetallproductsService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllSamsung().subscribe(res=>{
        this.data=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
      );
    }

}
