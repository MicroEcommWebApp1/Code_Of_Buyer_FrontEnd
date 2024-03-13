import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import { BuyerDto } from '../buyer-dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


registerForm: FormGroup;
name: any;
email: any;
password: any;
mobilenumber:any;
 
// confirmPassword: any;
buyerDto:BuyerDto=new BuyerDto();
  constructor(private formBuilder: FormBuilder,  private router: Router, private registerService:RegisterService,) {
   
      this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmPassword: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      // dob: ['', Validators.required],
      agreeTerms: [false, Validators.requiredTrue]
    })
   
}


 
  // constructor(private resisterService:RegisterService,
  //   private router:Router){}
 
  ngOnInit(): void {}
 
  registerUser(){
    this.registerService.registerUser(this.buyerDto).subscribe((data: any)=>{
    console.log(data);
    alert("Successfully Registered")
    this.goToLogin()
},
      (    error: any) => console.log(error)
    );
  }
 
goToLogin(){
    this.router.navigate(['/login'])
  }
 
 
onSubmit(){
    console.log(this.buyerDto);
    this.registerUser();
  }
 
gotoLogin(){
    this.goToLogin()
  }
// get f() { return this.registerForm.controls; }
// register() {
//   // Handle registration logic here
//   Object.values(this.registerForm.controls).forEach(control => {
//     control.markAsTouched();
//   });
//   if (this.registerForm.valid) {
//     // Form is valid, proceed with registration
//     console.log('Registration successful!');
//     this.router.navigate(['/login']);
//   } else {
//     // Form is invalid, display error messages
//     console.log('Registration failed. Please check your inputs.');
//   }
// }
}