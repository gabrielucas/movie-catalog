import { Component, HostListener, OnInit, inject } from '@angular/core'

import { SearchComponent } from '../../components/search/search.component'
import { PosterComponent } from '../../components/poster/poster.component'
import { SpinnerComponent } from '../../components/spinner/spinner.component'

import { MovieData } from '../../services/tmdb-service/@types'
import { TMDBService } from '../../services/tmdb-service/tmdb.service'
import { MovieDataResponse } from '../../services/tmdb-service/@types/MovieDataResponse'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, PosterComponent, SpinnerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public movies: MovieData[] = []

  private pageNumber: number = 1
  private tmdbService: TMDBService = inject(TMDBService)

  ngOnInit(): void {
    this.handlePopularMovies()
  }

  handlePopularMovies() {
    this.tmdbService
      .getPopularMovies(this.pageNumber)
      .subscribe((response: MovieDataResponse) => {
        const { results: newMovies } = response
        this.movies = [...this.movies, ...newMovies]
      })
  }

  private isScrolledToBottom(): boolean {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight
  }

  @HostListener('window:scroll', ['$event'])
  onScrollToPageBottom() {
    if (this.isScrolledToBottom()) {
      this.pageNumber++
      this.handlePopularMovies()
    }
  }

  onSearchMovieByTitle(title: string) {
    this.pageNumber = 1

    if (title) {
      this.tmdbService
        .getMoviesByTitle(title, this.pageNumber)
        .subscribe(response => {
          this.movies = response.results
        })
      return
    }

    this.movies = []
    this.handlePopularMovies()
  }
}
