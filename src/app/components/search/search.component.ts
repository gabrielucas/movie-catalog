import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: `./search.component.html`,
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchIcon = faMagnifyingGlass
  searchText!: string
  @Output() searchEvent = new EventEmitter<string>()

  onEnter(): void {
    this.searchEvent.emit(this.searchText)
  }
}
