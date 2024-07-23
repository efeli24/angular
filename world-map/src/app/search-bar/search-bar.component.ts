import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Output() submitted = new EventEmitter<string>(); isoCode = '';

  constructor () {}

  ngOnInit () {}

  setCountry (event: Event) {
    this.isoCode = (event.target as HTMLInputElement).value
  }

  onFormSubmit (event: any) {
    event.preventDefault();
    this.submitted.emit(this.isoCode)
  }

}
