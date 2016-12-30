/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Component, OnInit} from '@angular/core';
import {ForecastService} from '../weather-services/forecast.service';
import {HourlyForecast} from './hourly-forecast.module';
@Component({
  selector: 'hourly-forecast',
  template: `
    <h2>Hourly Forecast</h2>
    
    <div *ngFor="let hour of hourlyForecast">
      <h3>{{hour.FCTTIME.hour}}</h3><span class="text-muted">{{hour.temp.english}}</span>
    </div>
    
    <!-- Error handling for the API service -->
    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
      Oops!  An error has occurred: <b>{{errorMessage}}</b>
    </div>
`
})

export class Page2Component implements OnInit {
  hourlyForecast: HourlyForecast[];
  errorMessage: string;

  constructor( private weatherService: ForecastService) {}

  ngOnInit() {
    this.weatherService.getHourlyForecast().subscribe(
      result => this.hourlyForecast = result.hourly_forecast,
      error =>  this.errorMessage = <any>error,
    );
  }

}
