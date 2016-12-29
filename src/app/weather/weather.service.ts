/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {WeatherForecastApi} from './weather.module';
import 'rxjs/Rx';

@Injectable()
export class WeatherService {
  private weatherUrl = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(' +
    'select%20woeid%20from%20geo.places(1)%20where%20text%3D%22east%20earl%2C%20pa%22)&format=json&env=store%3A%2F%2Fdatatables.org%' +
    '2Falltableswithkeys';
  private mockDataUrl = '/app/mockData/weather.json';

  constructor(private http: Http) {
  }

  getWeather(mockData = false): Observable<WeatherForecastApi> {
    return this.http.get(mockData ? this.mockDataUrl : this.weatherUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    console.log('data:: ' + JSON.stringify(body));
    return body || {};
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
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

}
