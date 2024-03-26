import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UpdateService } from '../update.service';
import { BuyerDto } from '../buyer-dto';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  form: FormGroup; 
  buyerDto: BuyerDto = new BuyerDto();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router, 
    private updateService: UpdateService
  ) { 
    this.form = this.formBuilder.group({
      phonenumber: [this.buyerDto.phonenumber, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    });
  }

  ngOnInit(): void {
    this.buyerDto = JSON.parse(localStorage.getItem('buyerDto') || '{}');
    // this.form = this.formBuilder.group({
    //   phonenumber: [this.buyerDto.phonenumber, [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]
    // });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.buyerDto.phonenumber = this.form.value.phonenumber;
      this.updateService.updateBuyer(this.buyerDto).subscribe(() => {
        localStorage.setItem('buyerDto', JSON.stringify(this.buyerDto));
        this.router.navigate(['/profile']);
      }, error => {
        console.error('Error updating buyer:', error);
        
      });
    }
  }
}