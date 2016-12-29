import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {TenDayForecastComponent} from './pages/ten-day-forecast.component';
import {Page2Component} from './pages/page2.component';
import {AppRoutingModule} from './app-routing.module';
import {WeatherService} from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent, TenDayForecastComponent, Page2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ WeatherService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
