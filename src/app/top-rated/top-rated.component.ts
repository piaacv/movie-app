import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  topRated: any[] = [];

  constructor(private tmdbservice: TmdbService) {}

  ngOnInit(){
    this.tmdbservice.getTopRated()
    .subscribe((data:any) => {
      console.log(data);
      this.topRated= data.results;
      console.log(this.topRated);
    })
  }

  getMoviePosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL
    return `${baseUrl}${posterPath}`;
  }
}
