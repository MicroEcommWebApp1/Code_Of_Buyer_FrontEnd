import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';
import { ImageProcessingService } from 'src/app/service/image-processing.service';

@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent {

  
    
 ngOnInit():void{
  this.displayProducts();
 }
  constructor(private productService:GetallproductsService){ }
  data!:Product[];

  displayProducts(){
    this.productService.getAllGadgets().subscribe(res=>{
      this.data=res;
      console.log(res);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
}
