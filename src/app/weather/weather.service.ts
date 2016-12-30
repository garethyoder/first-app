/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {WeatherForecast, WeatherForecastApi} from './weather.module';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {

  private baseUrl = 'http://api.wunderground.com/api/';
  private apiKey = 'b2b8b3ed1aeb1961';

  private weatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(' +
    'select%20woeid%20from%20geo.places(1)%20where%20text%3D%22east%20earl%2C%20pa%22)&format=json&env=store%3A%2F%2Fdatatables.org%' +
    '2Falltableswithkeys';
  private mockDataUrl = '/app/mockData/weather.json';

  constructor(private http: Http) {
  }

  getTenDayForecast(mockData = false): Observable<WeatherForecastApi> {
    return this.http.get(mockData ? this.mockDataUrl : this.generateUrlForZipCode(17519))
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

  private generateUrlForZipCode(zipCode: number) {
    return this.baseUrl + this.apiKey + '/forecast10day/q/' + zipCode + '.json';
  }

}
