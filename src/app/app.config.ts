import { provideRouter } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ApplicationConfig, importProvidersFrom } from '@angular/core'

import { routes } from './app.routes'
import { httpInterceptorsProvider } from './http-interceptors'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    httpInterceptorsProvider,
  ],
}
