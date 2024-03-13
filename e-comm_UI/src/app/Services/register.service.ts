import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BuyerDto } from '../buyer-dto';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseURL = "http://localhost:8080/buyer/register";
  constructor(private httpClient:HttpClient) { }
 
  registerUser(buyerDto:BuyerDto):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,buyerDto);

  


}
}
