import { Injectable } from '@angular/core';
import { Payment } from '../model/payment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

 public paymentUrl:string="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";
  constructor(private http:HttpClient) { }

  createPayment(bookingId: number, obj: Payment) {
    return this.http.post<any>(this.paymentUrl+"/api/user/payments/"+bookingId,obj);
  }

  getAllPayment(paymentId:any)
  {
    return this.http.get<any>(this.paymentUrl+"/api/user/payment/view/"+paymentId);
  }
  updatePayment(bookingId:any){
    return this.http.get<any>(this.paymentUrl+"/api/user/payment/"+bookingId);
  }
}
