import { Component, OnInit } from '@angular/core';
import { GetallproductsService } from '../service/getallproducts.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product.model';
import { map } from 'rxjs';
import { ImageProcessingService } from '../service/image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  product!:Product;
  constructor(private service:GetallproductsService, private active:ActivatedRoute, private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    let productid=this.active.snapshot.paramMap.get('product_id');
    //console.log("product id is",productid);
    productid && this.service.getProductById(productid).subscribe(
      (res)=>{
      this.product=res;
      console.log(res);
      },
      (error)=>
      {
        console.log(error);
      }

    )
  }


}


