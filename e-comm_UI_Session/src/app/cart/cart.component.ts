import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: { product: any, quantity: number }[] = [];
  total: number = 0;
 
  constructor(private cartService: CartService, private router: Router) {}
 
  ngOnInit() {
    this.loadCartItems();
    this.calculateCartTotal();
}
loadCartItems(): void {
  this.cartItems = this.cartService.getCartItems();
}
calculateCartTotal(): void {
  this.total = this.cartService.getTotal();
}
  incrementQuantity(index: number): void {
    this.cartService.increaseQuantity(index);
    this.loadCartItems();
    this.calculateCartTotal();
  }
 
  decrementQuantity(index: number): void {
    this.cartService.decreaseQuantity(index);
    this.loadCartItems();
    this.calculateCartTotal();
  }
 
  removeFromCart(index: number): void {
    this.cartService.removeFromCart(index);
    this.loadCartItems();
    this.calculateCartTotal();
  }
  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.total = 0;
  }
 
  proceedToCheckout(): void {
   
    this.router.navigate(['/checkout'], { queryParams: { total: this.total }});
  }
}
 
