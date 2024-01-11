import { Component } from '@angular/core'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: `./search.component.html`,
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchIcon = faMagnifyingGlass
}
