import { Router } from '@angular/router'
import { Component } from '@angular/core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@Component({
  selector: 'app-go-back-button',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './go-back-button.component.html',
  styleUrl: './go-back-button.component.scss',
})
export class GoBackButtonComponent {
  arrowLeftIcon = faArrowLeft

  constructor(private router: Router) {}

  async goBackToHomePage() {
    await this.router.navigate([''])
  }
}
