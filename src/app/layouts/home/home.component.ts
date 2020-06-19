
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../core/services/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesData: {}[];

  constructor(service: MoviesService) {

    this.moviesData = service.allMovies();
    console.log(this.moviesData)
  }

  ngOnInit() {
  }

}
