/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Component, OnInit} from '@angular/core';
import {WeatherForecast} from '../weather/weather.module';
import {WeatherService} from '../weather/weather.service';

@Component({
  selector: 'ten-day-forecast',
  template: `
    <h2>Ten Day Forecast</h2>
    
    <div *ngFor="let dailyForecast of weatherForecast?.txt_forecast?.forecastday">
      <h3>{{dailyForecast.title}}</h3><span class="text-muted">{{dailyForecast.fcttext}}</span>
    </div>
    
    <!-- Error handling for the API service -->
    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
      Oops!  An error has occurred: <b>{{errorMessage}}</b>
    </div>
`
})

export class TenDayForecastComponent implements OnInit {
  weatherForecast: WeatherForecast;
  errorMessage: string;

  constructor( private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getTenDayForecast().subscribe(
      result => this.weatherForecast = result.forecast,
      error =>  this.errorMessage = <any>error,
      () => console.log(JSON.stringify(this.weatherForecast.txt_forecast))
    );
  }

}
