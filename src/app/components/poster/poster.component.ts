import { Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

import { MovieData } from '../../services/@types/MovieData'

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
})
export class PosterComponent {
  @Input() movieData!: MovieData
}
