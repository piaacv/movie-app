import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-app';
  http = inject(HttpClient);

  ngOnInit() {
    this.http.get('https://api.themoviedb.org/3/discover/movie')
    .subscribe((data:any) => {
      console.log(data);
    })
  }
}
