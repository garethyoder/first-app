/**
 * Created by Gareth Yoder on 12/25/2016.
 */

import {Component, OnInit} from '@angular/core';
import {WeatherForecast} from './ten-day-forecast.module';
import {ForecastService} from '../weather-services/forecast.service';

@Component({
  selector: 'ten-day-forecast',
  template: `
    <div class="page-title row">
      <div class="col-xs-6">
        <h2>Ten Day Forecast</h2>
      </div>
      <div class="last-updated col-xs-6">
        Last Updated: {{weatherForecast?.txt_forecast?.date}}
      </div>
    </div>
    
    <div *ngFor="let dailyForecast of weatherForecast?.simpleforecast?.forecastday; let i = index" class="ten-day-forecast row">
      <div class="weekday" class="col-sm-6 col-md-3 col-lg-2">
        <div class="weekday-short">{{dailyForecast.date.weekday_short}}</div>
        <span class="text-muted"><strong>{{dailyForecast.date.monthname_short}} {{dailyForecast.date.day}}</strong></span>
      </div>
      <div class="weekday-quick-glance col-sm-6 col-md-3 col-lg-2 text-right">
        <div class="weather-details-container">
          <span class="high">{{dailyForecast.high.fahrenheit}}<sup>°</sup></span>
          <span class="slash text-muted">/</span>
          <span class="low text-muted">{{dailyForecast.low.fahrenheit}}<sup>°</sup></span>
          <img src="{{dailyForecast.icon_url}}" />
        </div>
        <div class="probability-of-precipitation">
          <span class="text-muted">
            <i class="fa fa-umbrella" aria-hidden="true"></i> {{dailyForecast.pop}}%
          </span>
        </div>
      </div>
      <div class="col-md-6 col-lg-8">
        <strong>{{dailyForecast.date.weekday}}:</strong> {{getDayDetails(i).fcttext}}<br/><br/>
        <strong>{{dailyForecast.date.weekday}} Night:</strong> {{getNightDetails(i).fcttext}}
      </div>
    </div>
    
    <!-- Error handling for the API service -->
    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      <span class="fa fa-exclamation-circle" aria-hidden="true"></span>
      Oops!  An error has occurred: <b>{{errorMessage}}</b>
    </div>
  `,
  styleUrls: ['./ten-day-forecast.scss']
})

export class TenDayForecastComponent implements OnInit {
  weatherForecast: WeatherForecast;
  errorMessage: string;

  constructor( private weatherService: ForecastService) {}

  ngOnInit() {
    this.weatherService.getTenDayForecast().subscribe(
      result => this.weatherForecast = result.forecast,
      error =>  this.errorMessage = <any>error,
    );
  }

  getDayDetails(index: number) {
    for (let dayForecast of this.weatherForecast.txt_forecast.forecastday) {
      if (dayForecast.period === index * 2) {
        return dayForecast;
      }
    }
  }

  getNightDetails(index: number) {
    for (let nightForecast of this.weatherForecast.txt_forecast.forecastday) {
      if (nightForecast.period === index * 2 + 1) {
        return nightForecast;
      }
    }
  }

}
