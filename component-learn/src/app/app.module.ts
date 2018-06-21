import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/_common/calendar/calendar.component';
import { SeachComponent } from './components/_common/seach/seach.component';
import { StarComponent } from './components/_common/star/star.component';
import { AlertComponent } from './components/_common/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    SeachComponent,
    StarComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
