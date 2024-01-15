import { NgStyle } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import {
  IconDefinition,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

import { MovieDetails } from '../../services/tmdb-service/@types'

@Component({
  selector: 'app-indicators-flags',
  standalone: true,
  imports: [NgStyle, FontAwesomeModule],
  templateUrl: './indicators-flags.component.html',
  styleUrl: './indicators-flags.component.scss',
})
export class IndicatorsFlagsComponent implements OnInit {
  chartIcon: IconDefinition = faChartSimple
  colorByRelevance!: string
  @Input() movieFlags!: Pick<
    MovieDetails,
    'vote_average' | 'runtime' | 'release_date'
  >

  ngOnInit(): void {
    this.colorByRelevance = this.setVoteAverageColor(
      this.movieFlags.vote_average,
    )
  }

  setVoteAverageColor(voteAverage: number) {
    if (voteAverage < 6) return '#e74c3c'
    if (voteAverage >= 6 && voteAverage <= 7) return '#f1c40f'
    return '#2ecc71'
  }
}
