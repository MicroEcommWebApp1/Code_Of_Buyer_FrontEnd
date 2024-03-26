import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: { product: any, quantity: number }[] = [];
 
  constructor() { }
 
  addToCart(product: any): void {
    const existingItemIndex: number = this.cartItems.findIndex(item => item.product.id === product.id);
   
    if (existingItemIndex !== -1) {
        this.cartItems[existingItemIndex].quantity++;
    } else {
        this.cartItems.push({ product, quantity: 1 });
    }
  }
 
  removeFromCart(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }
 
  increaseQuantity(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems[index].quantity++;
    }
  }
 
  decreaseQuantity(index: number): void {
    if (index >= 0 && index < this.cartItems.length && this.cartItems[index].quantity > 1) {
      this.cartItems[index].quantity--;
    }
  }
 
  updateQuantity(index: number, quantity: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      const itemToUpdate = this.cartItems[index];
      itemToUpdate.quantity = quantity;
    } else {
      console.error('Invalid index provided for updateQuantity');
    }
  }
 
  getCartItems(): { product: any, quantity: number }[] {
    return this.cartItems;
  }
 
  getTotal(): number {
    let total = 0;
    for (const item of this.cartItems) {
      total += item.quantity * item.product.price;
    }
    return total;
  }
 
  clearCart(): void {
    this.cartItems = [];
  }
}
 