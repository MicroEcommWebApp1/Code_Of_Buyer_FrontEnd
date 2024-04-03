import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  months: string[] = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  years: number[] = [];
  totalCartValue: number | undefined;
  constructor(private route: ActivatedRoute) {
    // Dynamically generate years
    const currentYear = new Date().getFullYear();
    const range = 13; 
    for (let i = 0; i < range; i++) {
      this.years.push(currentYear + i);
    }
   
}
ngOnInit() {
  const totalPriceData = localStorage.getItem('totalPrice');
  if (totalPriceData) {
    this.totalCartValue = JSON.parse(totalPriceData);
  }
}}


