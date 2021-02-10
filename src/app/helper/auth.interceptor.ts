import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    let authReq = request;
    if (!authReq.url.substring(22, 28).match('public')){
      if (null != token){
        authReq = request.clone({
          setHeaders: {
            // 'Content-Type': 'application/json',
            Authorization : token
          }
        });
    }
    }
    return next.handle(authReq);
  }

}
