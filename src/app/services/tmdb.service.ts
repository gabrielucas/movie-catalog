import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { MovieDataResponse } from './@types/MovieDataResponse'

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  constructor(private http: HttpClient) {}

  getPopularMovies(page?: number): Observable<MovieDataResponse> {
    return this.http.get<MovieDataResponse>(`/movie/popular?page=${page}`)
  }
}
