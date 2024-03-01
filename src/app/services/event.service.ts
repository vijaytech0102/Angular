import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event.model';
import { LoginStoreService } from './login-store.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {


  // constructor(private http: HttpClient, private loginStoreService: LoginStoreService) {}

  // // private apiUrl = 'https://8080-adfcabecddbceccebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io';
  // private apiUrl = 'https://8080-cffbceabadfebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io';

  // private getAuthorizationHeader(): HttpHeaders {
  //   const token = this.loginStoreService.token;
  //   console.log(token);
  //   return new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${token}`
  //   });
  // }

  // addEvent(obj: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/api/event`, obj, { headers: this.getAuthorizationHeader()});
  // }

  // getEvents(): Observable<Event[]> {
  //   return this.http.get<Event[]>(`${this.apiUrl}/api/event`, { headers: this.getAuthorizationHeader() });
  // }

  // updateEvent(eventId:number,event:Event):Observable<Event>{
  //        return this.http.put<Event>(this.apiUrl+"/api/admin/updateevent/"+eventId,event);
  //      }
  // deleteEvent(eventId:number):Observable<number>{
  //             return this.http.delete<number>(this.apiUrl+"/api/deleteEvent/"+eventId);
  //          }

constructor(private http:HttpClient) { }
token = localStorage.getItem('token');


public apiUrl:string="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";
  addEvent(obj: any):Observable<any> {
    const headers = { Authorization: `Bearer ${this.token}` };

  return this.http.post<any>(this.apiUrl+"/api/event",obj, {headers});
  }

  getAllEvents():Observable<Event[]>{
    return this.http.get<Event[]>(this.apiUrl+"/api/event");
   }
   deleteEvent(eventId:number):Observable<number>{
     return this.http.delete<number>(this.apiUrl+"/api/deleteEvent/"+eventId);
   }
   updateEvent(eventId:number,event:Event):Observable<Event>{
     return this.http.put<Event>(this.apiUrl+"/api/admin/updateevent/"+eventId,event);
   }
   findEventByType(eventType:string):Observable<Event>{
     return this.http.get<Event>(this.apiUrl+"/admin/event/"+eventType);
   }

}
