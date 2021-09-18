import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from "rxjs/operators";

@Injectable()
export class MainInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log('request', request)
    try {
      return next.handle(request).pipe(
        map((event: HttpEvent<any>) => {
          // console.log('event', event)
          if (event instanceof HttpResponse) {
            // console.log('event--->>>', event);
          }
          return event;
        }))
    } catch (err) {
      // console.log('err', err)
      return next.handle(request)
      // return next.handle(request)
    }
  }
}
