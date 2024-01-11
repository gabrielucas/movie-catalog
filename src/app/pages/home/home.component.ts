import { Component, HostListener } from '@angular/core'

import { SearchComponent } from '../../components/search/search.component'
import { PosterComponent } from '../../components/poster/poster.component'

import { TMDBService } from '../../services/tmdb.service'
import { MovieData } from '../../services/@types/MovieData'
import { MovieDataResponse } from '../../services/@types/MovieDataResponse'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PosterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  moviesList: MovieData[] = []
  currentPage = 1

  constructor(private tmdbService: TMDBService) {
    this.handlePopularMovies()
  }

  private isScrolledToBottom(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight
  }

  @HostListener('window:scroll', ['$event'])
  onScrollToPageBottom() {
    if (this.isScrolledToBottom()) {
      this.currentPage++
      this.handlePopularMovies()
    }
  }

  handlePopularMovies() {
    this.tmdbService
      .getPopularMovies(this.currentPage)
      .subscribe((response: MovieDataResponse) => {
        const { results: newMovies } = response
        this.moviesList = [...this.moviesList, ...newMovies]
      })
  }
}
