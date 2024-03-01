import { Injectable } from '@angular/core';
import { AuthResponse } from '../model/auth-response';

@Injectable({
  providedIn: 'root'
})
export class LoginStoreService {
  _authUser: AuthResponse;

  constructor() { }
addUser(authUser: AuthResponse){
this._authUser=authUser;
}
isLoggedIn(){
return this._authUser!=null;
}
get role(){
return this._authUser.role;
}
get token(){
return this._authUser.token;
}
}
