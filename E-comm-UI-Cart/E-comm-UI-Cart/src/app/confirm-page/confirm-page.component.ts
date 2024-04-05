import { Component } from '@angular/core';
import { PaymentDto } from '../payment-dto';
import { CartDto } from '../cart-dto';
import { PaymentService } from '../payment.service';
import { CartService } from '../cart.service';
import { OrderListDto } from '../order-list-dto';
import { ConfirmpageService } from '../confirmpage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.component.html',
  styleUrls: ['./confirm-page.component.css']
})
export class ConfirmPageComponent {

  lastPayment!: PaymentDto;
  carts: CartDto[] = [];

  constructor( private router: Router,private paymentService: PaymentService, private cartService: CartService, private confirmpageService: ConfirmpageService) {}

  ngOnInit(): void {
    this.loadPaymentsAndCarts();
  }

  loadPaymentsAndCarts(): void {
    const buyerDtoString = localStorage.getItem('buyerDto');
    if (buyerDtoString) {
      const buyerDto = JSON.parse(buyerDtoString);
      const email = buyerDto.email;
  
      this.paymentService.getPaymentsByEmail(email).subscribe(payments => {
        // Extract the last payment from the payments array
        this.lastPayment = payments[payments.length - 1];
        // localStorage.setItem('lastPayment', JSON.stringify(this.lastPayment));
      });
  
      this.cartService.getCartDetailsByEmail(email).subscribe(carts => {
        this.carts = carts;
        // localStorage.setItem('carts', JSON.stringify(this.carts));
      });
    } else {
      console.error('buyerDto not found in local storage');
      // Handle the case where buyerDto is not found in local storage
      // For example, you could redirect the user to a page where they can input their buyer information again
    }
  }
  confirmOrder(index: number): void {
    // Check if lastPayment is defined before accessing its properties
    if (this.lastPayment) {
      // Check if index is within bounds of the carts array
      if (index >= 0 && index < this.carts.length) {
        const cart = this.carts[index];
        // Create an OrderListDto object with the necessary data
        const orderDto: OrderListDto = {
          buyerName: this.lastPayment.name,
          email: this.lastPayment.email,
          address: this.lastPayment.address,
          phoneNo: this.lastPayment.phoneNo,
          productName: cart.name,
          description: cart.description,
          thumbnail: cart.thumbnail,
          price: cart.price,
          quantity: cart.quantity,
          category: cart.category,
          subcategory1: cart.subcategory1,
          subcategory2: cart.subcategory2,
          totalAmount: this.lastPayment.totalCartValue,
          status: 'Pending',
          orderId: 0,
          productId: cart.productId,
          paymentId: this.lastPayment.paymentId
        };

        console.log('Order DTO:', orderDto); // Log the orderDto object

        // Call the addOrder method of ConfirmpageService to send the order to the backend
        this.confirmpageService.addOrder(orderDto).subscribe(response => {
          console.log('Order placed successfully:', response);
          // Move to the next cart item if available
          this.confirmOrder(index + 1);
          
          // Navigate only after the order has been successfully posted
          if (index === this.carts.length - 1) {
            this.router.navigate(['/order-list']);
          }
        }, error => {
          console.error('Error placing order:', error);
        });
      } else {
        console.error('Index out of bounds:', index);
      }
    } else {
      console.error('No payment data available.');
    }
}
}