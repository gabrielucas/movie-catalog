import { ActivatedRoute } from '@angular/router'
import { Component, OnInit } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

import { PosterComponent } from '../../components/poster/poster.component'
import { GoBackButtonComponent } from '../../components/go-back-button/go-back-button.component'
import { IndicatorsFlagsComponent } from '../../components/indicators-flags/indicators-flags.component'

import { TMDBService } from '../../services/tmdb.service'
import { MovieDetails } from '../../services/@types/MovieDetails'
import { AdditionalInformationComponent } from '../../components/additional-information/additional-information.component'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PosterComponent,
    NgOptimizedImage,
    GoBackButtonComponent,
    IndicatorsFlagsComponent,
    AdditionalInformationComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  movieDetails!: MovieDetails

  constructor(
    private tmdbService: TMDBService,
    private activateRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const movieId = Number(this.activateRoute.snapshot.params['id'])
    this.handleMovieDetails(movieId)
  }

  handleMovieDetails(movieId: number) {
    return this.tmdbService.getMovieDetailsById(movieId).subscribe(response => {
      this.movieDetails = {
        ...response,
        release_date: String(new Date(response.release_date).getFullYear()),
      }
    })
  }
}
