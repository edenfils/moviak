import { MoviesService } from './../../core/services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movieData: {};

  constructor(service: MoviesService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.movieData = service.getMovie(params.get('title'))[0];
      console.log(this.movieData);
    });
   }


  ngOnInit() {
  }

}
