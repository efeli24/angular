import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryInfoComponent } from "./country-info/country-info.component";
import { MapComponent } from "./map/map.component";
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WorldbankAPIService } from "./worldbank-api.service";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountryInfoComponent, MapComponent, SearchBarComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'World Map';
  countryDetails = [];

  constructor(private worldbankapi: WorldbankAPIService) {}

  onCountry(isoCode: string) {
    this.worldbankapi.getCountryDetails(isoCode);
  }

}
