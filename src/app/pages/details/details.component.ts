import { Component, Input } from '@angular/core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PosterComponent } from '../../components/poster/poster.component'
import { Router } from '@angular/router'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FontAwesomeModule, PosterComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent {
  arrowLeftIcon = faArrowLeft

  @Input() colorByRelevance: string = '#2ecc71'

  constructor(private router: Router) {}

  async goBackToHomePage() {
    await this.router.navigate([''])
  }
}
