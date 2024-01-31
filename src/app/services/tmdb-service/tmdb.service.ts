import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'

import { MovieDetails, MovieDataResponse } from './@types'

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  private http: HttpClient = inject(HttpClient)

  getPopularMovies(page?: number): Observable<MovieDataResponse> {
    return this.http.get<MovieDataResponse>(`/movie/popular?page=${page}`)
  }

  getMoviesByTitle(
    title: string,
    page?: number,
  ): Observable<MovieDataResponse> {
    return this.http.get<MovieDataResponse>(
      `/search/movie?include_adult=false&query=${title}&page=${page}`,
    )
  }

  getMovieDetailsById(id: number): Observable<MovieDetails> {
    return this.http.get<MovieDetails>(`/movie/${id}`)
  }
}
