import { Component ,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginDto } from '../login-dto';

import { RegisterService } from '../Services/register.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Services/login.service';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginDto: LoginDto = new LoginDto();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login();
  }

  loginUser() {
    //this.loginDto = this.loginForm.value;
    this.loginDto = this.loginForm.value
    this.loginService.loginUser(this.loginDto).subscribe({
      next: (data) =>{ 
        // Assuming login is successful, navigate to dashboard
        
        alert("Login successful");
        this.router.navigate(['/buyerdash']);
      },
      error: (e) => {
        console.log(e);
        if (e.status === 200) {
          
          //alert("Login successful");
          Swal.fire({
            title: "Good job!",
            text: "Successfully Loggedin!",
            icon: "success"
          });
          this.router.navigate(['/buyerdash']);
          console.log("logged in");
        } else {
         // alert("Login failed");
         Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Invalid Credentials"});
          console.log("logged fail");
        }
      }
  });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}


