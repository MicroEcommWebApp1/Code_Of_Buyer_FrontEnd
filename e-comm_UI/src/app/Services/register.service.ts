import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerDto } from '../buyer-dto';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerService(arg0: AbstractControl<any, any>, arg1: AbstractControl<any, any>) {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8080/buyer/register";
  buyerRegistration: any; 
  constructor(private httpClient:HttpClient) { }
 
  registerUser(buyerDto:BuyerDto){
    return this.httpClient.post(`${this.baseURL}`,buyerDto);



}
// loginDto(email:any, password:any){

//   return this.httpClient.get(`http://localhost:8080/buyer/login/${email}/${password}`);
  
//   }


}

