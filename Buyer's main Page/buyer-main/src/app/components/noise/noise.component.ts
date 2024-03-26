import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';

@Component({
  selector: 'app-noise',
  templateUrl: './noise.component.html',
  styleUrls: ['./noise.component.css']
})
export class NoiseComponent {

  ngOnInit():void{
    this.displayProducts();
   }
    constructor(private productService:GetallproductsService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllNoise().subscribe(res=>{
        this.data=res;
        console.log(res);
      },
      (error)=>{
        console.log(error);
      }
      );
    }

}
