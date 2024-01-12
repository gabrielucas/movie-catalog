import { Component, HostListener, OnInit } from '@angular/core'

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
export class HomeComponent implements OnInit {
  movies: MovieData[] = []
  private pageNumber: number = 1

  constructor(private tmdbService: TMDBService) {}

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

  onMovieSearchByTitle(title: string) {
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
