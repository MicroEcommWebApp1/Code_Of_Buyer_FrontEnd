import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product.model';
import { BuyerDto } from '../buyer-dto';
import { Router } from '@angular/router';
import { CartDto } from '../cart-dto';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  buyerDto: BuyerDto = new BuyerDto();
  cartItems: Product[] = [];

  
  constructor(private cartService: CartService, private router: Router) { }

  

  ngOnInit(): void {
    this.cartItems = this.cartService.cartItems;
    this.buyerDto = JSON.parse(localStorage.getItem('buyerDto') || '{}');
    this.buyerDto.email = this.buyerDto.email;
    this.fetchCartItems();
    this.loadCartItems();
  }
  
  

  fetchCartItems() {
    this.cartService.getCartDetailsByEmail(this.buyerDto.email).subscribe(
      (cartItems: Product[]) => {
        this.cartItems = cartItems;
      },
      error => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  // removeFromCart(index: number) {
  //   this.cartService.removeFromCart(index);
  // }

  incrementQuantity(item: Product) {
    item.quantity++;
  }

  

  // deleteCartItem(index: number) {
  //   const productIdToDelete = this.cartItems[index].productId;
  //   this.cartService.deleteShoppingCart(this.buyerDto.email, productIdToDelete).subscribe(
  //     response => {
  //       // Refresh cart items after deletion
  //       this.fetchCartItems();
        
        
  //     },
  //     error => {
  //       console.error('Error deleting item from cart:', error);
        
  //     }
  //   );
  // }

  loadCartItems() {
    this.buyerDto = JSON.parse(localStorage.getItem('buyerDto') || '{}');
    this.cartService.getCartDetailsByEmail(this.buyerDto.email).subscribe(
      (cartItems: Product[]) => {
        this.cartItems = cartItems;
      },
      error => {
        console.error('Error fetching cart items:', error);
      }
    );
  }

  deleteCartItem(index: number) {
    const productIdToDelete = this.cartItems[index].productId;
  if (productIdToDelete) {
    this.cartService.deleteShoppingCart(this.buyerDto.email, productIdToDelete).subscribe(
      response => {
        // If deletion is successful, remove the item from cartItems array
        this.cartItems.splice(index, 1); // Remove the item at the specified index
      },
      error => {
        console.error('Error deleting item from cart:', error);
      }
    );
  } else {
    console.error('Error: productId is null');
  }
}

  decrementQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }


  
  proceedToCheckout() {
   
    const totalPrice = this.getTotalPrice();
  
  // Store total price in local storage
  localStorage.setItem('totalPrice', JSON.stringify(totalPrice));
    const cartDtoArray: CartDto[] = this.cartItems.map(item => {
      const totalPrice = item.price * item.quantity;
      const cartDto: CartDto = {
        productId: item.productId,
        quantity: item.quantity,
        cartId: 0,
        name: '',
        email: '',
        description: '',
        thumbnail: '',
        price: 0,
        category: '',
        subcategory1: '',
        subcategory2: '',
        totalproductPrice: totalPrice
      };
      return cartDto;
    });

    // Call updateShoppingCart for each product in the cart
    cartDtoArray.forEach(cartDto => {
      this.cartService.updateShoppingCart(cartDto, this.buyerDto.email, cartDto.productId).subscribe(
        response => {
          console.log('Cart details updated successfully:', response);
        },
        error => {
          console.error('Error updating cart details:', error);
        }
      );
    });

    // After updating all products, navigate to the checkout page
    this.router.navigate(['/checkout']); // Replace '/checkout' with your actual checkout route
  }
}