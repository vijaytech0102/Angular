import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginStoreService } from '../services/login-store.service';
import { Router } from '@angular/router';
import { AuthResponse } from '../model/auth-response';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  message: string='';
  authResponse: AuthResponse=null;
  constructor(private router: Router,
    private service: AuthService,
    private loginStore: LoginStoreService) { }

  ngOnInit(): void {
  }
  // logout()
  // {
  //   console.log("In Admin Component navbar, logOut(): ");

  //   if(this.loginStore.hasAuthResponse())
  //   {
  //     this.authResponse = this.loginStore.authResponse;
  //     console.log("AuthResponse: "+JSON.stringify(this.loginStore.authResponse));
  //     this.service.logout(this.authResponse).subscribe
  //     (()=>{this.resolve();

  //     }
  //   , (error: HttpErrorResponse)=>{ this.reject(error)});
  //   }
  //   else
  //   {
  //     console.log("In HomeComponent, authResponse is null: "+this.authResponse);
  //   }
  // }
  logout(){
this.router.navigate(["/login"])
  }
  // login(): void
  // {
  //   this.router.navigate([""])
  // }

  resolve() {
    console.log("Signing out...");
    // this.loginStore.nullifyAuthResponse();
    // this.login()
  }

  reject(error: HttpErrorResponse)
  {
    console.log("In HomeComponent->reject(): during logout");
    error? console.log("error object is truthy") : console.log("error object falsy");
    console.log("error.error: "+error.error.toString());
    console.log("error.message: "+error.message);
    console.log("error.status: "+error.status);
  }

  addEvent()
  {
    this.router.navigate(["admin/addevent"])
  }

  listEvent()
  {
    this.router.navigate(["admin/eventlist"])
  }

  addFacility(){
    this.router.navigate(["admin/addfacility"])
  }
  listFacility()
  {
    this.router.navigate(["admin/facilitylist"])
  }
  home()
  {
    this.router.navigate(["admin"])
  }
  dashboard()
  {
    this.router.navigate(["admin/dashboard"])
  }

  allBookingForAdmin()
{
this.router.navigate(["admin/booking"])
}
}
