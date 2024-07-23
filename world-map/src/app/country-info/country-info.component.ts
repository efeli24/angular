import { NgForOf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-info',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './country-info.component.html',
  styleUrl: './country-info.component.css'
})
export class CountryInfoComponent implements OnInit {

  @Input () countryDetails = [];

  constructor () {}

  ngOnInit() {}

}
