import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../Services/register.service';
import Swal from 'sweetalert2';

import { UserService } from '../user.service';
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
 
  constructor(private formBuilder: FormBuilder,  private router: Router, private service: RegisterService, private userService:UserService) {
      
      this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, this.nameValidator()]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordValidator()]],
      // confirmPassword: ['', Validators.required],
      mobilenumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      // dob: ['', Validators.required],
      // agreeTerms: [false, Validators.requiredTrue]
    })

   
   
}
get f() { return this.registerForm.controls; 
}
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value: string = control.value;
      const hasSpecialCharacter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
      const hasNumber = /\d/.test(value);
      const isValid = value.length >= 6 && value.length <= 16 && hasSpecialCharacter && hasNumber;
      
      return isValid ? null : { invalidPassword: true };
    };}

     nameValidator(): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } | null => {
        const value: string = control.value;
        const isValid =  /^[a-zA-Z\s]+$/.test(value);
    
        return isValid ? null : { invalidName: true };
      };
    }

register() {

  this.userService.currentUser = {
    name: this.registerForm.value.name, // Set the name of the logged-in user
    email: this.registerForm.value.email, // Set the email of the logged-in user
    mobilenumber: this.registerForm.value.mobilenumber//
  };
 // Handle registration logic here
  Object.values(this.registerForm.controls).forEach(control => {
    control.markAsTouched();
  });

  if (this.registerForm.valid) {
    // Form is valid, proceed with registration
    

    let response = this.service.registerUser(this.registerForm.value).subscribe({
      next: (data) =>{ 
        //console.log(data);
                        
           },
      error: (e) =>{ if(e.status===200){
        //alert('Registration successful!'); 
        Swal.fire({
          title: "Good job!",
          text: "Successfully Registered!",
          icon: "success"
        });
    this.router.navigate(['/login']);
    
  } else {
    // Form is invalid, display error messages
      //  alert('Email already exsist, use other email or click on login.')
      
       Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email already Exsist!",
        
      
      });
    }
  },

})
  
}
}
}
