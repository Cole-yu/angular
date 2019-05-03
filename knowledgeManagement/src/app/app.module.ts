import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule }    from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { UnitsComponent } from './units/units.component';
import { appRoutes } from './app.router';
import {Http, Headers, RequestOptions, HttpModule} from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule      //http模块
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
