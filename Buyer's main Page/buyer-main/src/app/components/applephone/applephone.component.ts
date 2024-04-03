import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-applephone',
  templateUrl: './applephone.component.html',
  styleUrls: ['./applephone.component.css']
})
export class ApplephoneComponent {
  ngOnInit():void{
    this.displayProducts();
   }
    constructor(private productService:GetallproductsService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllApple().subscribe(res=>{
        this.data=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
      );
    }
}
