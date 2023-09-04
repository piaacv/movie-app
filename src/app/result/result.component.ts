import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  movies: any[] = [];
  genresMap: { [id: number]: string } = {};
  popular: any[] = [];
  searchText: string = '';
  movieDetails: any;

  constructor(private tmdbservice: TmdbService,
     private route: ActivatedRoute,
     private location: Location) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieDetails = params;
      console.log('Título:', this.movieDetails.title);
      console.log('Descripción:', this.movieDetails.overview);
      console.log('Fecha de Lanzamiento:', this.movieDetails.release_date);
    });
    
    this.tmdbservice.getMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.results;
      });

      this.tmdbservice.getGenres()
      .subscribe((data: any) => {
        data.genres.forEach((genre: any) => {
          this.genresMap[genre.id] = genre.name;
        })
        });

         this.tmdbservice.getPopular()
         .subscribe((data: any) => {
           console.log(data);
           this.popular = data.results;
         });
  }

  getMovieGenres(genreIds: number[]): string {
    const genres = genreIds.map(id => this.genresMap[id]);
    return genres.join(', ');
  }

  getMoviePosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL
    return `${baseUrl}${posterPath}`;
  }

  filtermovies(){
    if(!this.searchText){
      this.movies = [];
      console.log(this.movies.length)
      return;
    }else{
      this.tmdbservice.getMovies()
      .subscribe((data: any) => {
        console.log(data);
        this.movies = data.results;
        let titlefilter = this.movies.filter(movie=>
          movie.title.toLowerCase().includes(this.searchText.toLowerCase()))
          this.movies = titlefilter
      })
  }
}

goback() {
  this.location.back();
}
}
