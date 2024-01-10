import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  constructor(private http: HttpClient) {}

  async getPopularMovies(): Promise<Observable<Object>> {
    return this.http.get(`/movie/popular`)
  }
}
