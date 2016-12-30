import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {TenDayForecastComponent} from './ten-day-forecast/ten-day-forecast.component';
import {Page2Component} from './hourly-forecast/hourly-forecast.component';
import {AppRoutingModule} from './app-routing.module';
import {ForecastService} from './weather-services/forecast.service';

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
  providers: [ ForecastService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
