import { Provider } from '@angular/core'
import { HTTP_INTERCEPTORS } from '@angular/common/http'

import { TMDBInterceptor } from './tmdb-interceptor'

export const httpInterceptorsProvider: Provider[] = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TMDBInterceptor,
    multi: true,
  },
]
