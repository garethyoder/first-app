import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {TenDayForecastComponent} from './pages/ten-day-forecast.component';
import {Page2Component} from './pages/page2.component';
/**
 * Created by Gareth Yoder on 12/25/2016.
 */

const routes: Routes = [
  { path: '', redirectTo: '/ten-day-forecast', pathMatch: 'full'},
  { path: 'ten-day-forecast', component: TenDayForecastComponent },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
