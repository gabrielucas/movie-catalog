import { Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'

import { MovieData } from '../../services/@types/MovieData'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink, RouterOutlet],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
})
export class PosterComponent {
  @Input() movieData!: Pick<MovieData, 'id' | 'poster_path' | 'title'>
  @Input() isDisplayedTitle?: boolean = false
  @Input() hasShadowApplied?: boolean = false
}
