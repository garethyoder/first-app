/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {TenDayForecastApi} from '../ten-day-forecast/ten-day-forecast.module';
import 'rxjs/Rx';
import {HourlyForecastApi} from '../hourly-forecast/hourly-forecast.module';

@Injectable()
export class ForecastService {

  private baseUrl = 'http://api.wunderground.com/api/';
  private apiKey = 'b2b8b3ed1aeb1961';
  private mockDataUrlTenDayForecast = '/app/mockData/ten-day-forecast-mock-data.json';
  private mockDataUrlHourlyForecast = '/app/mockData/ten-day-forecast-mock-data.json';

  constructor(private http: Http) {
  }

  getTenDayForecast(mockData = false): Observable<TenDayForecastApi> {
    return this.http.get(mockData ? this.mockDataUrlTenDayForecast : this.generateTenDayForecastUrlByZipCode(17519))
      .map(this.extractData)
      .catch(this.handleError);
  }

  getHourlyForecast(mockData = false): Observable<HourlyForecastApi> {
    return this.http.get(mockData ? this.mockDataUrlHourlyForecast : this.generateHourlyForecastUrlByZipCode(17519))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  private generateTenDayForecastUrlByZipCode(zipCode: number) {
    return this.baseUrl + this.apiKey + '/forecast10day/q/' + zipCode + '.json';
  }

  private generateHourlyForecastUrlByZipCode(zipCode: number) {
    return this.baseUrl + this.apiKey + '/hourly/q/' + zipCode + '.json';
  }

}
