import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  constructor(private router: Router) { }

  logout(): void {
    // Clear local storage upon logout
    localStorage.removeItem('token');
    localStorage.clear();
    // Redirect to login page or any other desired route
    this.router.navigate(['/login']);
  }
}
