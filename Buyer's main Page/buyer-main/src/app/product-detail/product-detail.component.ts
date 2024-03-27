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
  productdata!:Product[];
  constructor(private service:GetallproductsService, private active:ActivatedRoute, private imageProcessingService:ImageProcessingService){}
  ngOnInit(): void {
    let productid=this.active.snapshot.paramMap.get('product_id');
    //console.log("product id is",productid);
    productid && this.service.getProductById(productid).pipe(
      map((products: Product[]) => {
        return products.map((product: Product) => {
          // Transform the product using both functions
          const productWithImages = this.imageProcessingService.createImages(product);
          const productWithThumbnail = this.imageProcessingService.createImage(productWithImages);
          return productWithThumbnail;
        });
      })
    )
    .subscribe(
      (response:Product[])=>
      {
        console.log(response);
        this.productdata=response;
        
      },
      (error:HttpErrorResponse)=>{
        console.error('Error Displaying Product', error);
        if (error.status === 400) {
          console.error('Details are not entered!!');
          alert('Please make sure that you Enter all the Details');
        } 
        else{
          alert('Error Adding product: ' + error.message);
        }
      }
    );}


}


