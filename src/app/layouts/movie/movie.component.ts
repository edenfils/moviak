import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieData: {};

  constructor(service: MoviesService, private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovie(params.get('title'))[0];
      console.log(this.movieData);
    });
   }

   goToSchedule(slug) {
     this.router.navigate(['movies', slug, 'schedule']);
   }


  ngOnInit() {
  }

}
