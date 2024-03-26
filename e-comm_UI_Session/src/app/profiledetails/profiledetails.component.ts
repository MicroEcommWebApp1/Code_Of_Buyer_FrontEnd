import { Component, OnInit } from '@angular/core';
import { BuyerDto } from '../buyer-dto'; // Assuming you have a BuyerDto interface or model
import { ActivatedRoute, Router } from '@angular/router';
import { BuyerService } from '../Services/buyer.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profiledetails.component.html',
  styleUrls: ['./profiledetails.component.css']
})
export class ProfiledetailsComponent implements OnInit {
  buyerDto: BuyerDto | null = null;
  email!:string;

  constructor(private router: Router,private buyerService: BuyerService) { }

  ngOnInit(): void {
    // this.loadBuyerDetails(this.email);
    const buyerDtoString = localStorage.getItem('buyerDto');
    if (buyerDtoString) {
      this.buyerDto = JSON.parse(buyerDtoString);
    }
  }
  
  // loadBuyerDetails(email: string): void {
  //   this.buyerService.getBuyerDetailsByEmail(email).subscribe(
  //     (data: BuyerDto[]) => {
  //       if (data && data.length > 0) {
  //         this.buyerDto = data[0];
  //       }
  //     },
  //     error => {
  //       console.log('Error fetching buyer details:', error);
  //     }
  //   );
  // }

  onEdit(): void {
    this.router.navigate(['/update']);
  }

}