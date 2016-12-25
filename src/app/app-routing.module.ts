import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {Page1Component} from "./pages/page1.component";
import {Page2Component} from "./pages/page2.component";
/**
 * Created by Gareth Yoder on 12/25/2016.
 */


const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full'},
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
