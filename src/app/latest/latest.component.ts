import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent {
  latest: any = {};

  constructor(private tmdbservice: TmdbService) {}
  ngOnInit(){
    this.tmdbservice.getLatest()
         .subscribe((data: any)=>{
          console.log(data);
          this.latest = data;
          console.log(this.latest);
         }) 
  }
  getMoviePosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL
    return `${baseUrl}${posterPath}`;
  }
}
