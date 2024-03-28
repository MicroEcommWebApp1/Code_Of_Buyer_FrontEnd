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
    constructor(private productService:GetallproductsService, private imageProcessingService:ImageProcessingService){ }
    data!:Product[];
  
    displayProducts(){
      this.productService.getAllGadgets()
      .pipe(
        map((products: Product[]) => {
          return products.map((product: Product) => {
            // Transform the product using both functions
            const productWithImages = this.imageProcessingService.createImages(product);
           // const productWithThumbnail = this.imageProcessingService.createImage(productWithImages);
            return productWithImages;
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
