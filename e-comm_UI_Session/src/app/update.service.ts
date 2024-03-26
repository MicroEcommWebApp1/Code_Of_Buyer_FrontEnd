import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuyerDto } from './buyer-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private baseURL = "http://localhost:8080/buyer/updateprofile";

  constructor(private http: HttpClient) { }

  updateBuyer(buyerDto: BuyerDto): Observable<any> {
    return this.http.put<any>(`${this.baseURL}`, buyerDto);
  }

}
