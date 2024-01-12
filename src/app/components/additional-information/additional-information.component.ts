import { Component, Input } from '@angular/core'

import { MovieDetails } from '../../services/@types/MovieDetails'

@Component({
  selector: 'app-additional-information',
  standalone: true,
  imports: [],
  templateUrl: './additional-information.component.html',
  styleUrl: './additional-information.component.scss',
})
export class AdditionalInformationComponent {
  @Input() movieDetails!: Pick<
    MovieDetails,
    'genres' | 'production_companies' | 'production_countries'
  >
}
