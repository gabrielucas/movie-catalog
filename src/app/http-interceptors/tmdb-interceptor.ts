import { Observable } from 'rxjs'
import { Injectable } from '@angular/core'
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'

import { devEnvironment } from '../../environments/environment'

Injectable()
export class TMDBInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const interceptedRequest = req.clone({
      setHeaders: {
        accept: 'application/json',
        Authorization: `Bearer ${devEnvironment.apiKey}`,
      },
      url: `${devEnvironment.baseUrl}${req.url}`,
    })

    return next.handle(interceptedRequest)
  }
}
