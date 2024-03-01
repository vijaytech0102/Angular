import { Injectable } from '@angular/core';
import { AuthResponse } from '../model/auth-response';
import { LoginStoreService } from './login-store.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


//  private apiUrl: string = 'https://8080-adfcabecddbceccebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io';
  public apiUrl: string = 'https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io';
//   private orgUrl="https://8080-addbbbaebebccefdfbbabaacdebaeacfaabcbdf.premiumproject.examly.io";

  _authUser!: AuthResponse;

  constructor(private loginStore: LoginStoreService,
              private httpClient: HttpClient,
            ) {
    console.log(`In auth service`);
  }

  userName:string='';

  setUserName(name:string)
  {
    this.userName=name;
  }

  getUserName():string{
  return this.userName;
  }


  register(login: User): any {
    //this.loginStore.nullifyAuthResponse;
    return this.httpClient.post(`${this.apiUrl}/auth/register`, login);
  }




  login(login: any): any {
    //this.loginStore.nullifyAuthResponse;

    return this.httpClient.post(`${this.apiUrl}/auth/login`, login);
  }

  logout(authResponse: AuthResponse): any {
    console.log("In loginService signOut(): "+JSON.stringify(authResponse));
    return this.httpClient.get(`${this.apiUrl}` + '/logout');
  }

}
