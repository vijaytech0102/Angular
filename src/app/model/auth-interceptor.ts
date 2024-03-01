import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginStoreService } from '../service/login-store.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private store: LoginStoreService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
     if(this.store?.isLoggedIn()){
      let token=this.store._authUser?.token;
      const req1 = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      });
      return next.handle(req1);
    }
    return next.handle(request);
  }
}


