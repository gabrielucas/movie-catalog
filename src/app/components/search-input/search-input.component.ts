import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: `./search-input.component.html`,
  styleUrl: './search-input.component.scss',
})
export class SearchInputComponent {
  searchIcon = faMagnifyingGlass
}
