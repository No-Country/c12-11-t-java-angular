import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class InteceptorInterceptor implements HttpInterceptor {

  constructor() {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token ="Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MiIsImlhdCI6MTY5MDQ3MTQ0MiwiaXNzIjoiaHR0cDovL3d3dy5leGFtcGxlLmNvbS8iLCJhdXRob3JpdGllcyI6WyJhZG1pbiJdLCJmaXJzdG5hbWUiOiJ0ZXN0IiwibGFzdG5hbWUiOiJ0ZXN0MiIsImlzQWN0aXZlIjp0cnVlLCJleHAiOjE2OTA1NTc4NDJ9.1n_4_xeIb6q2mHYLYyMOZlH876xvrG5iX_xFX8PiDeWXSGJjXLKSs671L7hYEFOu_qJ9ZRlD_iPAnrysq-WtJQ"

    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization',token)
      })
      return next.handle(cloned)
    }
    return next.handle(request);
  }
}
