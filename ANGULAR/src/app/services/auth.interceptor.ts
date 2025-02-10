import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler):Observable<HttpEvent<any>> {
    const token = localStorage.getItem('authToken');
    console.log("in interceptor", token); // Retrieve token

    if (token && !request.url.includes('/auth/login')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,

           // Add token to Authorization header
        },
        
      });
    }
    console.log('Headers in interceptor:', request.headers.get('Authorization'));

    console.log("in interceptor request", request.headers);
    return next.handle(request);
  }
}
