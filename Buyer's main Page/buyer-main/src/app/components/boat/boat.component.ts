import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.css']
})
export class BoatComponent {
  ngOnInit():void{
    this.displayProducts();
   }
    constructor(private productService:GetallproductsService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllBoat().subscribe(res=>{
        this.data=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
      );
    }

}
