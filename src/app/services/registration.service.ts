import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient:HttpClient) { }
    apiUrl:string="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";
  registerOrganizer(org:any)
  {
    return this.httpClient.post<any>(this.apiUrl+"/api/registration/organizer",org);
  }

  getAllOrganizers(): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = { Authorization: `Bearer ${token}` };
    return this.httpClient.get(`${this.apiUrl}/api/registration/organizer`, { headers });
  }
}
