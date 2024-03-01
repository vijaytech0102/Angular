import { Component, OnInit } from '@angular/core';
import { AuthResponse } from '../model/auth-response';
import { User } from '../model/user.model';
import { LoginStoreService } from '../services/login-store.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Organizer } from '../model/organizer.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authResponse:AuthResponse = null;
  login: User = null;


  message: string="";
  isSaved: boolean=false;
  loginForm:FormGroup;
  organizerData:Organizer;
  constructor(private loginStore: LoginStoreService,
              private service: AuthService,
              private router: Router, private formBuilder:FormBuilder)
               {
                this.loginForm=this.formBuilder.group({
                  email:['',Validators.required],
                  password:['', Validators.required],
                })
              }

  ngOnInit(): void {
    this.isSaved=false;
    console.log("In ngOnInit() in LoginComponent");
  }
  sign()
  {

      this.isSaved=true;
      this.login=this.loginForm.value;
      alert(this.login);
      console.log(this.login);
      this.service.login(this.login)
      .subscribe((res: any)=>{this.resolve(res); this.home(res);
        console.log("response in the signin"+res);
    },
      (error: HttpErrorResponse)=>{this.reject(error);})
  }


  resolve(response: any)
  {
    console.log("LoginComponent: in resolve() "+JSON.stringify(response));
    this.authResponse=<AuthResponse>response;

    if(this.authResponse)
    {
      this.loginStore._authUser = this.authResponse;
      console.log(this.loginStore.role);

      console.log("LoginComponent: authResponse is truthy, stored in LoginStoreService");
    }

    else
    {
      console.log("LoginComponent: authResponse is falsy");
    }
  }

  reject(error: HttpErrorResponse)
  {
    this.message="Invalid username/password";
    //console.log(error);
  }
  home(res:any)
  {
    if(res.role==='Admin'|| res.role==='ADMIN')
    {

    this.router.navigate(['/admin']);
    }
    else{
        this.service.setUserName(this.authResponse.username);
        this.router.navigate(['/organizer']);
    }

  }
register()
{
  this.router.navigate(['/register']);
}

  // clearMsg()
  // {
  //   this.message=null;
  // }

  // land()
  // {
  //   this.router.navigate(['/movies/landing']);
  // }

  // canDeactivate(): Observable<boolean> {
  //   if (!this.isSaved) {
  //     const result = window.confirm('There are unsaved changes! Are   you sure?');
  //     return of(result);
  //   }
  //   return of(true);
  // }

}
