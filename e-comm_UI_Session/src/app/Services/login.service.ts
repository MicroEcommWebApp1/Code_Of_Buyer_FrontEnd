import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDto } from '../login-dto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// export class LoginService {

//   private baseUrl="http://localhost:8080/buyer/login"

//   constructor(private httpClient: HttpClient) { }

//   loginUser(loginDto:LoginDto):Observable<object>{
//     console.log(loginDto)
//     return this.httpClient.post('${this.baseUrl}',loginDto);
//   }
export class LoginService {

  private baseUrl = "http://localhost:8080/buyer/login";

  constructor(private httpClient: HttpClient) { }

  loginUser(loginDto: LoginDto) {
    return this.httpClient.post(`${this.baseUrl}`, loginDto);
  }

}
