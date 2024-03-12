import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { ViewChild } from '@angular/core';



@Component({
  selector: 'app-buyerdash',
  templateUrl: './buyerdash.component.html',
  styleUrls: ['./buyerdash.component.css']
})
export class BuyerdashComponent {
  
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    // Add logic to navigate to the specified route
    // For example, you can use Angular Router to navigate
    switch (route) {
      case 'cart':
        // Implement navigation logic for the 'Cart' route
        break;
      case 'profile':
        // Implement navigation logic for the 'Profile' route
        break;
      default:
        break;
    }
    this.sidenav.close();
  }

  logout(): void {
    // Implement logout logic
    // For example, you can clear authentication tokens or redirect to the login page
    console.log('Logout clicked');
  }
}



