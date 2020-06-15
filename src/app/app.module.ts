
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HomeComponent } from './layouts/home/home.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { ThankYouComponent } from './layouts/thank-you/thank-you.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    MovieComponent,
    ScheduleComponent,
    CheckoutComponent,
    ThankYouComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
