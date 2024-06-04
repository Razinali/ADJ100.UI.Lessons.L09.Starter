import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-movies',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './display-movies.component.html',
  styleUrl: './display-movies.component.css'
})
export class DisplayMoviesComponent {
  constructor(private http: HttpClient) {
    console.log("in displayMovies ctor");
    console.log("http is: ", http);
  }

  private moviesRoute = 'http://localhost:3000/movies';
  public movies!: Movie[];

  getMovies() {
      console.log("invoking getMovies");
      this.http.get<Movie[]>(this.moviesRoute).subscribe(movies => {
          this.movies = movies;
      console.log('Movies', this.movies);
      });
  }

    ngOnInit() {
      // should stay here because it gets data... not in ctor.. becuase it has a promise on line 19
      console.log("inside ngInit");
      this.getMovies();
      console.log("finished ngInit");
  }

}
