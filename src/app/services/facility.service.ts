import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Facility } from '../model/facility.model';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  constructor(private http:HttpClient) { }
  token = localStorage.getItem('token');

  // apiUrl:string="https://8080-adfcabecddbceccebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";
  public apiUrl:string="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";

  addFacility(obj: any):Observable<Facility> {

    const headers = { Authorization: `Bearer ${this.token}` };

    return this.http.post<Facility>(this.apiUrl+"/api/facility",obj,{ headers });
  }
  getAllFacilities():Observable<Facility[]>{
    return this.http.get<Facility[]>(this.apiUrl+"/api/facility");
  }

   deleteFacility(facilityId:number):Observable<number>{
     return this.http.delete<number>(this.apiUrl+"/api/deleteFacility/"+facilityId);
   }
   updateFacility(facilityId:number,facility:Facility):Observable<Event>{
     return this.http.put<Event>(this.apiUrl+"/api/admin/updatefacility/"+facilityId,facility);
   }
}
