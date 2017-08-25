import {Injectable} from '@angular/core';
import {COUNTRIES} from './mock-countries';

@Injectable()
export class CountriesServices {
	getCountries() {
		return COUNTRIES;
	}
}