import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import {MainNavigationComponent} from './nav/main-navigation.component';
import {Page1Component} from './pages/page1.component';
import {Page2Component} from './pages/page2.component';
import {AppRoutingModule} from './app-routing.module';
import {WeatherService} from './weather/weather.service';

@NgModule({
  declarations: [
    AppComponent, MainNavigationComponent, Page1Component, Page2Component
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
