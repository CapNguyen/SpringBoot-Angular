import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { TimeTableComponent } from './pages/student/time-table/time-table.component';
import { CheckAttendanceComponent } from './pages/student/check-attendance/check-attendance.component';
import { TakeAttendanceComponent } from './pages/lecturer/take-attendance/take-attendance.component';
import { ScheduleComponent } from './pages/lecturer/Schedule/schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    TimeTableComponent,
    CheckAttendanceComponent,
    TakeAttendanceComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
