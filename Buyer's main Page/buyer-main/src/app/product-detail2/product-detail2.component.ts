import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { GetallproductsService } from '../service/getallproducts.service';
import { ActivatedRoute } from '@angular/router';
import { ImageProcessingService } from '../service/image-processing.service';
import { FileHandle } from '../model/file-handle.model';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-product-detail2',
  templateUrl: './product-detail2.component.html',
  styleUrls: ['./product-detail2.component.css']
})
export class ProductDetail2Component implements OnInit {
  product!:Product;



  constructor(private service:GetallproductsService, private active:ActivatedRoute, private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    let productid=this.active.snapshot.paramMap.get('product_id');
    //console.log("product id is",productid);
    productid && this.service.getProductById(productid).subscribe(
      (res)=>{
        this.product = this.imageProcessingService.createImages(res);
      console.log(res);
      },
      (error)=>
      {
        console.log(error);
      }

    )
  }

 
}
