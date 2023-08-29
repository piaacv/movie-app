import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  movies: any[] = [];
  nowPlaying: any[] = [];
  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.results;
      });

      this.tmdbService.getNowPlaying()
         .subscribe((data: any)=>{
          console.log(data);
          this.nowPlaying = data.results;
          console.log(this.nowPlaying);
         })
  }

  getMoviePosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL
    return `${baseUrl}${posterPath}`;
  }
}
