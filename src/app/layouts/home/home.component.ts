
import { Component, OnInit } from '@angular/core';
import { MoviesService } from './../../core/services/movies.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesData: {}[];

  constructor(service: MoviesService, private router: Router) {

    this.moviesData = service.allMovies();
    console.log(this.moviesData);
  }

  selectMovie(slug: string) {
   this.router.navigate(['movies', slug]);
  }

  ngOnInit() {
  }

}
