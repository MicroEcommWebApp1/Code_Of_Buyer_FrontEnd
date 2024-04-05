import { Component, OnInit } from '@angular/core';
import { OrderListDto } from '../order-list-dto';
import { OrderListService } from '../order-list.service';
import { BuyerDto } from '../buyer-dto';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  buyerDto: BuyerDto = new BuyerDto();
  orders: OrderListDto[] = [];

  constructor(private orderService: OrderListService) { }

  ngOnInit(): void {
    this.loadBuyer();
  }

  loadBuyer(): void {
    const buyerDtoString = localStorage.getItem('buyerDto');
    if (buyerDtoString) {
      this.buyerDto = JSON.parse(buyerDtoString);
      // Assuming the email is present in the buyerDto
      if (this.buyerDto.email) {
        this.loadOrders(this.buyerDto.email);
      } else {
        console.error('Email not found in buyerDto');
        // Handle the case where email is not found in buyerDto
      }
    } else {
      console.error('BuyerDto not found in local storage');
      // Handle the case where buyerDto is not found in local storage
    }
  }

  loadOrders(email: string): void {
    this.orderService.getOrderdetailsByEmail(email).subscribe(
      orders => {
        this.orders = orders;
      },
      error => {
        console.error('Error loading orders:', error);
        // Handle error loading orders
      }
    );
  }
}