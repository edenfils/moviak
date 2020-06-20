import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThankYouComponent } from './layouts/thank-you/thank-you.component';
import { CheckoutComponent } from './layouts/checkout/checkout.component';
import { ScheduleComponent } from './layouts/schedule/schedule.component';
import { MovieComponent } from './layouts/movie/movie.component';
import { HomeComponent } from './layouts/home/home.component';


const routes: Routes = [
  {
    path: 'movies/:title',
    component: MovieComponent,
  },

  {
    path: 'movies/:title/schedule',
    component: ScheduleComponent,
  },

  {
    path: 'movies/:title/schedule/checkout',
    component: CheckoutComponent,
  },

  {
    path: 'movies/:title/schedule/checkout/thank-you',
    component: ThankYouComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
