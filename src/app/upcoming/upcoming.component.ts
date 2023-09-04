import { Component } from '@angular/core';
import { TmdbService } from '../tmdb.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent {
  upcoming: any[] = [];

  constructor(private tmdbservice: TmdbService, private router: Router) {}
  
  ngOnInit(){
    this.tmdbservice.getUpcoming()
         .subscribe((data: any)=>{
          console.log(data);
          this.upcoming = data.results;
          console.log(this.upcoming);
         }) 
  }

  getMoviePosterUrl(posterPath: string): string {
    const baseUrl = 'https://image.tmdb.org/t/p/w500'; // TMDb base image URL
    return `${baseUrl}${posterPath}`;
  }

  onImageClick(movie: any) {
    this.router.navigate(['/result'], { queryParams: movie });
  }

}
