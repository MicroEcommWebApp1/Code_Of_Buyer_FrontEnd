import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-kurthi',
  templateUrl: './kurthi.component.html',
  styleUrls: ['./kurthi.component.css']
})
export class KurthiComponent {

  ngOnInit():void{
    this.displayProducts();
   }
    constructor(private productService:GetallproductsService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllKurthi().subscribe(res=>{
        this.data=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
      );
    }
}
