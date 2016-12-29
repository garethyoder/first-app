import {Component, OnInit} from '@angular/core';
import {WeatherService} from './weather/weather.service';
import {Weather, WeatherForecastApi} from './weather/weather.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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
