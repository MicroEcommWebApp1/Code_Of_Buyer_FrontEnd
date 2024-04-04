import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentDto } from './payment-dto';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8084';

  constructor(private http: HttpClient) { }
  addPayment(payment: PaymentDto): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/payment`, payment);
  }

  getAllPayments(): Observable<PaymentDto[]> {
    return this.http.get<PaymentDto[]>(`${this.baseUrl}/paymentdetails`);
  }

  getPaymentsByEmail(email: string): Observable<PaymentDto[]> {
    return this.http.get<PaymentDto[]>(`${this.baseUrl}/paymentdetails/${email}`);
  }

}
