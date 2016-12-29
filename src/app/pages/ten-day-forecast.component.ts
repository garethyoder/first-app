/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Component, OnInit} from '@angular/core';
import {WeatherForecastApi, Weather} from '../weather/weather.module';
import {WeatherService} from '../weather/weather.service';

@Component({
  selector: 'ten-day-forecast',
  template: `
    <h2>Ten Day Forecast</h2>
    <div *ngFor="let dailyForecast of weatherForecast?.forecast">
      <h3>{{dailyForecast.high}}</h3><span class="text-muted">{{dailyForecast.text}}</span>
    </div>
    
    <!-- Error handling for the API service -->
    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
      Oops!  An error has occurred: <b>{{errorMessage}}</b>
    </div>
`
})

export class TenDayForecastComponent implements OnInit {
  weatherForecastApi: WeatherForecastApi;
  weatherForecast: Weather;
  errorMessage: string;

  constructor( private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather(true).subscribe(
      result => this.weatherForecast = result.query.results.channel.item,
      error =>  this.errorMessage = <any>error,
      () => console.log('else ' + this.weatherForecastApi.query.results.channel.item.forecast[0].high)
    );
  }
}
