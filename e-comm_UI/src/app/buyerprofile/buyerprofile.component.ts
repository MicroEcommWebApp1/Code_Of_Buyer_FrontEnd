import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-buyerprofile',
  templateUrl: './buyerprofile.component.html',
  styleUrls: ['./buyerprofile.component.css']
})
export class BuyerprofileComponent implements OnInit {

  currentUser: { name: string, email: string, mobilenumber: string } | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Fetch user details from UserService
    
    this.currentUser = this.userService.currentUser;
  }
  saveProfile() {
    // Here you can implement the logic to save the updated profile data
    console.log('Profile saved:', this.currentUser);
  }

}
