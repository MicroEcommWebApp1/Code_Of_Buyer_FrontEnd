import { Component ,OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginDto } from '../login-dto';

import { RegisterService } from '../Services/register.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../Services/login.service';
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
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm.value);
  }

  loginUser() {
    this.loginDto = this.loginForm.value;
    this.loginService.loginUser(this.loginDto).subscribe(
      (data: any) => {
        // Assuming login is successful, navigate to dashboard
        
        alert("Login successful");
        this.router.navigate(['/buyerdash']);
      },
      (error) => {
        console.log(error);
        if (error.status === 200) {
          
          alert("Login successful");
          this.router.navigate(['/buyerdash']);
          console.log("logged in");
        } else {
          alert("Login failed");
          console.log("logged fail");
        }
      }
    );
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}