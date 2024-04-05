import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';
import { map } from 'rxjs';
import { ImageProcessingService } from '../services/imageprocessing.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CartService } from '../cart.service';
import { BuyerDto } from '../buyer-dto';

 
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit{
  buyerDto: BuyerDto = new BuyerDto();
// product!: Product;

products: Product[] = [];
 
 ngOnInit():void{
  this.displayProducts();
  this.buyerDto = JSON.parse(localStorage.getItem('buyerDto') || '{}');
 }
  constructor(private productService:ProductService, 
    private imageProcessingService:ImageProcessingService,
    private CartService: CartService,){ }
  data!:Product[];

  
  loadProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      error => {
        console.error('Error loading products:', error);
      }
    );
  }

  
  displayProducts(){
    this.productService.getAllProducts()
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

    addToCart(item: Product) {
      const cartItem = {
        productId: item.productId,
        name: item.name,
        email: this.buyerDto.email,
        description: item.description,
        thumbnail: item.thumbnail,
        price: item.price,
        quantity: 1,
        category: item.category,
        subcategory1: item.subcategory1,
        subcategory2: item.subcategory2,
        totalproductPrice: item.price,
      };
  
      this.CartService.addtoCart(cartItem).subscribe(
        response => {
          console.log('Product added to cart:', response);
          // Optionally, you can handle success here, such as showing a success message
        },
        error => {
          console.error('Error adding product to cart:', error);
          // Handle error here, such as showing an error message
        }
      );
    }
    }

