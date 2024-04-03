import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // product_id!: number;
  product!:Product;
  // productdata:any |Product;

  constructor( private Productsservice: ProductService,private active:ActivatedRoute){}

  ngOnInit(): void {
    let productid=this.active.snapshot.paramMap.get('product_id');
    console.log("product id is",productid);
    productid && this.Productsservice.getProductById(productid).subscribe(
      (res)=>{
        this.product=res;
        console.log(res);
      }
    );
   
  }

  getProductDetails() {
    
      
  }
}
// ngOnDestroy() {
//   if (this.productSubscription) {
//     this.productSubscription.unsubscribe(); // Unsubscribe to prevent memory leaks
//   }
// }

