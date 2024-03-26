import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BuyerDto } from '../buyer-dto';// Assuming you have a BuyerDto interface or model

@Injectable({
  providedIn: 'root'
})
export class BuyerService {

  private baseURL = "http://localhost:8080/buyer/buyerdetails";
  constructor(private http: HttpClient) { }

  
  getBuyerDetailsByEmail(email: string): Observable<BuyerDto[]> {
    return this.http.get<BuyerDto[]>(`${this.baseURL}/${email}`);
  }
}