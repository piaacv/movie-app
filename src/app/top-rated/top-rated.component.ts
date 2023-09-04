import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  topRated: any[] = [];

  constructor(private tmdbservice: TmdbService, private router: Router) {}

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

  onImageClick(movie: any) {
    this.router.navigate(['/result'], { queryParams: movie});
  }

}
