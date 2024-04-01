import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { GetallproductsService } from 'src/app/service/getallproducts.service';
import { ImageProcessingService } from 'src/app/service/image-processing.service';

@Component({
  selector: 'app-apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.css']
})
export class ApparelComponent implements OnInit{

    
 ngOnInit():void{
  this.displayProducts();
 }
  constructor(private productService:GetallproductsService){ }
  data!:Product[];

  displayProducts(){
    this.productService.getAllApparel().subscribe(res=>{
      this.data=res;
      console.log(res);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
}
