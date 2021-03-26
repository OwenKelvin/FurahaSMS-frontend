import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {PhoneNumberUtil, shortnumbermetadata} from 'google-libphonenumber';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumbersService {
  lib: any;
  phoneUtil: any;

  constructor(private http: HttpClient) {
    this.phoneUtil = PhoneNumberUtil.getInstance();
  }

  getAllowedCountries(): Observable<any> {
    const url = 'api/phones/allowed-countries';
    return this.http.get<any>(url)
      .pipe(map(data => data,
        () => {
          // Error Has been captured by interceptor
        }
      ));
  }

  getAllCountryCodes(): Observable<any> {
    const countries = shortnumbermetadata.countryCodeToRegionCodeMap['0'];
    return of(countries.map((country: any) => {
      const code = this.phoneUtil.getCountryCodeForRegion(country);
      return {code, country};
    }).sort((a: any, b: any) => {
      const nameA = a.country.toUpperCase(); // ignore upper and lowercase
      const nameB = b.country.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    }));
  }

  isValidPhoneNumber(phoneNumber: undefined | number | string | null) {
    try {
      const testNumber = this.phoneUtil.parseAndKeepRawInput('+' + phoneNumber, 'KE');
      return this.phoneUtil.isPossibleNumber(testNumber);
    } catch (err) {
      return false;
    }

  }

  splitNumberFromCountryCode(phoneNumber: string): { code: string; phone: string } {
    const phoneUtil = PhoneNumberUtil.getInstance();
    try {
      // eslint-disable-next-line no-underscore-dangle
      const splitValues = phoneUtil.parse(/^\+(\w+-?\s?)+/.test(phoneNumber.trim()) ? phoneNumber : '+' + phoneNumber).values_;
      return {code: splitValues[1], phone: splitValues[2]};
    } catch (error) {
      return {code: '', phone: phoneNumber};
    }
  }
}
