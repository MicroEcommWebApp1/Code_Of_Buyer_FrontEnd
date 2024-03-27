import { Component, OnInit } from '@angular/core';
import { GetallproductsService } from '../service/getallproducts.service';
import { Product } from '../model/product.model';
import { map } from 'rxjs';
import { ImageProcessingService } from '../service/image-processing.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{

 ngOnInit():void{
  this.displayProducts();
 }
  constructor(private productService:GetallproductsService, private imageProcessingService:ImageProcessingService){ }
  data!:Product[];

  displayProducts(){
    this.productService.getAllProducts()
    .pipe(
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
        this.data=response;
        
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
