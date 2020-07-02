
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../core/services/movies.service';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  movieData: {};
  time: string = '11:30pm';
  adultTicketsPrice = 15.03;
  childTicketsPrice = 12.06;
  seniorTicketsPrice = 11.53;
  adultTickets = 1;
  childTickets = 0;
  seniorTickets = 0;

  constructor(private service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovie(params.get('title'))[0];
      console.log(this.movieData);
    });
   }

   pickTime(time) {
     console.log(time);
     this.time = time;
   }

   clickedSeat(slug, index) {
     this.service.reservedSeat(slug, index);
     console.log('clicked chair');
   }

  ngOnInit() {
  }

}
