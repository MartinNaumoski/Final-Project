import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req,next){
    let tokenReq = req.clone({
      setHeaders: {
        Authorization:`Bearer ${localStorage.getItem('authToken')}`
      }
    })
    return next.handle(tokenReq);
  }
}
