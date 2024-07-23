import { Routes } from '@angular/router';
import { CountryInfoComponent } from './country-info/country-info.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    { path: 'country-info', component: CountryInfoComponent },
    { path: 'map', component: MapComponent },
];
