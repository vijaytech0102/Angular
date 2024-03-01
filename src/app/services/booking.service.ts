import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Booking } from '../model/booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {



  constructor(private http:HttpClient) { }

  // apiUrl:string="https://8080-adfcabecddbceccebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";
 public apiUrl:string="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";







  addBooking(obj: any):Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl+"/api/user/booking",obj);
  }

  getAllBookings():Observable<any> {
    return this.http.get<any>(this.apiUrl+"/api/registration/organizer");
}
//   getBookingById(Oid:any):Observable<any> {
//     return this.http.get<any>(this.apiUrl+"/api/registration/organizer/organizerId"+Oid);
// }

updateBookingStatus(bookingId: number, newStatus: string) {
  return this.http.put<any>(`${this.apiUrl}/api/user/booking/changestatus/${bookingId}?bookingStatus=${newStatus}`, {});
  // return this.http.put<any>(`this.apiUrl/api/user/booking/changestatus/${bookingId}?newStatus=${newStatus}`);
}

}
