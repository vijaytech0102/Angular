import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStoreService } from '../services/login-store.service';
import { AuthResponse } from '../model/auth-response';
import { User } from '../model/user.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Organizer } from '../model/organizer.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm:FormGroup;
  login!: User;
  authResponse!: AuthResponse;
  message: string=null;
  isSaved: boolean=false;
  organizerData:Organizer=new Organizer();

  constructor(private authService: AuthService, private loginStore: LoginStoreService,
      private formBuilder:FormBuilder, private router:Router) {

        this.registerForm=this.formBuilder.group({
          username:['',[Validators.required,Validators.minLength(5)]],
          email:['',[Validators.required, Validators.email]],
          password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#@!%^&*()<>?/\|}{~:]).{8,}$')]],
          confirmPassword:['',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[$#@!%^&*()<>?/\|}{~:]).{8,}$')]],
          mobile:['',[Validators.required]],
          role:['',[Validators.required]],
        },{ validator:this.passwordMisMatchValidator});
       }

  ngOnInit(){


  }




  passwordMisMatchValidator(control: FormGroup){
    const password: string = control.get('password').value;
    const confirmPassword: string = control.get('confirmPassword').value;
    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ passwordMismatch: true });
    } else {
      return null;
    }
  }


  register()
  {
    this.isSaved=true;
    console.log(this.registerForm.value);
      this.login=this.registerForm.value;
      console.log("Register Details"+this.login);

      // saving the data in organizer repository
      // this.eventModel.eventType = this.formValue.value.eventType;
    //   if(this.registerForm.value.role=="Organizer" || this.registerForm.value.role=="ORGANIZER")
    //     {
    //         this.organizerData.userName=this.registerForm.value.username;
    //         this.organizerData.mobileNumber=this.registerForm.value.mobile;
    //         this.authService.organizerSave(this.organizerData)
    //         .subscribe((res)=>{
    //       console.log("Response from Organizer Repo"+res);
    //     })
    // }
      // this.authService.register(this.login)
      // .subscribe((req: AuthResponse)=>{
      //   this.resolve(req); this.signIn();}
      // ,
      // (error: HttpErrorResponse)=>{this.reject(error);})

      this.authService.register(this.login)
      .subscribe((res)=>{
        console.log(res);
        if(res)
        this.signIn();
      })

  }

  clearMsg()
  {
    this.message=null;
  }

  resolve(response: AuthResponse)
  {
    this.loginStore._authUser = response;
  }

  reject(err: HttpErrorResponse)
  {
    this.message = "User exists...";
  }

  signIn()
  {
    this.router.navigate(['/login']);
  }

}
