import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class WorldbankAPIService {

  constructor(private http: HttpClient) {}

  public getCountryDetails(isoCode: string) {

    const apiCallUrl = `https://api.worldbank.org/V2/country/${isoCode}?format=json`;

    return this.http.get(apiCallUrl);
    
  }

}
