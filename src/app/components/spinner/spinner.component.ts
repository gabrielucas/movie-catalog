import { NgStyle } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  @Input() color: string = '#1e3497'
}
