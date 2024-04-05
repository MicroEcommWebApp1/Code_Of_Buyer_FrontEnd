import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderListDto } from './order-list-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmpageService {

  private baseUrl = 'http://localhost:8085'; // Your backend API base URL

  constructor(private http: HttpClient) { }

  addOrder(orderDto: OrderListDto): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/order`, orderDto);
  }
}
