import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})

export class MapComponent {

  

  // async getCountryDetails(isoCode: string) {

  //   const apiCallUrl = `https://api.worldbank.org/V2/country/${isoCode}?format=json`;
  
  //   const countryDetails = await fetch(apiCallUrl);
  
  //   countryName: countryDetails.name;
  //   countryCapital: countryDetails.capitalCity;
  //   countryRegion: countryDetails.region.value;
  //   countryIncome: countryDetails.incomeLevel.value;
  //   countryLong: countryDetails.longitude;
  //   countryLat: countryDetails.latitude;
  
  // }

  // constructor() {  };

  // ngOnInit(): void {  };

  // // On mouse hover, change country fill color
  
  // const paths = document.getElementsByTagName('path');
  
  // for (let i = 0; i < paths.length; i++) {
  //   paths[i].addEventListener('click', event => alert(event.target.dataset.key));
  // };

  // countryHover = document.getElementById('AF')
  //   .setAttribute('fill', "#E7422D");

  // // On mouse click, get svg ID and translate into ISO code
  
  // // Get search input field value and translate country name into ISO code using svg
  
  // private wbAPI = '';
  
  // constructor(private http: HttpClient) { }

  // (isoCode: string): Observable<any> {
  //   return this.http.get(apiCall);
  // }

}
