import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { MovieDataResponse } from './@types/MovieDataResponse'
import { MovieDetails } from './@types/MovieDetails'

@Injectable({
  providedIn: 'root',
})
export class TMDBService {
  constructor(private http: HttpClient) {}

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
