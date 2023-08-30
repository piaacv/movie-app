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
  searchText: string = '';

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

  filtermovies() {
  if (!this.searchText) {
    this.movies = [];
    return;
  } else {
    this.tmdbService.getMovies().subscribe((data: any) => {
      console.log(data);
      this.movies = data.results;
      let titleFilter = this.movies.filter(movie =>
        movie.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    if (titleFilter.length === 0) {
      console.log('No se encontraron resultados.');
      }
    this.movies = titleFilter;
    });
  }
}


}
