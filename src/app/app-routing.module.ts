import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TenDayForecastComponent} from './ten-day-forecast/ten-day-forecast.component';
import {Page2Component} from './hourly-forecast/hourly-forecast.component';
/**
 * Created by Gareth Yoder on 12/25/2016.
 */

const routes: Routes = [
  { path: '', redirectTo: '/ten-day-forecast', pathMatch: 'full'},
  { path: 'ten-day-forecast', component: TenDayForecastComponent },
  { path: 'hourly-forecast', component: Page2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
