import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false; // assuming initially user is not logged in

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }

  logout() {
    // Call the logout method from AuthService
    this.authService.logout();
    // After logging out, set isLoggedIn to false
    this.isLoggedIn = false;
  }
}
