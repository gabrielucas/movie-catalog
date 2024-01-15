import { Component, Input } from '@angular/core'
import { NgOptimizedImage } from '@angular/common'
import { RouterLink } from '@angular/router'

import { MovieData } from '../../services/@types/MovieData'

@Component({
  selector: 'app-poster',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './poster.component.html',
  styleUrl: './poster.component.scss',
})
export class PosterComponent {
  @Input() movieData!: Pick<MovieData, 'id' | 'poster_path' | 'title'>
  @Input() isDisplayedTitle?: boolean = false
  @Input() hasShadowEffectApplied?: boolean = false
}
