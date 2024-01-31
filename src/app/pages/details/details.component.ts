import { ActivatedRoute } from '@angular/router'
import { NgOptimizedImage } from '@angular/common'
import { Component, OnInit, inject } from '@angular/core'

import { PosterComponent } from '../../components/poster/poster.component'
import { SpinnerComponent } from '../../components/spinner/spinner.component'
import { GoBackButtonComponent } from '../../components/go-back-button/go-back-button.component'
import { IndicatorsFlagsComponent } from '../../components/indicators-flags/indicators-flags.component'
import { AdditionalInformationComponent } from '../../components/additional-information/additional-information.component'

import { MovieDetails } from '../../services/tmdb-service/@types'
import { TMDBService } from '../../services/tmdb-service/tmdb.service'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    PosterComponent,
    NgOptimizedImage,
    GoBackButtonComponent,
    IndicatorsFlagsComponent,
    AdditionalInformationComponent,
    SpinnerComponent,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  public movieDetails!: MovieDetails

  private tmdbService: TMDBService = inject(TMDBService)
  private activateRoute: ActivatedRoute = inject(ActivatedRoute)

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
