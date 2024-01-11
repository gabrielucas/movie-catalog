import { Component } from '@angular/core'

import { SearchComponent } from '../../components/search/search.component'

import { TMDBService } from '../../services/tmdb.service'
import { MovieData } from '../../services/@types/MovieData'
import { MovieDataResponse } from '../../services/@types/MovieDataResponse'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  moviesList: MovieData[] = []

  constructor(private tmdbService: TMDBService) {
    this.getMovies()
  }

  getMovies() {
    this.tmdbService
      .getPopularMovies()
      .subscribe((response: MovieDataResponse) => {
        const { results: moviesList } = response
        this.moviesList = moviesList
      })
  }
}
