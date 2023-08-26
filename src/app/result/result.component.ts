import { Component, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  http = inject(HttpClient);
  movies: any[] = [];

  ngOnInit() {
    const apiKey = '936ddc953bd14900e5c528a00d324cc7';
    const params = new HttpParams().set('api_key', apiKey);
    this.http.get('https://api.themoviedb.org/3/discover/movie', { params })
    .subscribe((data:any) => {
      console.log(data);
      this.movies = data.results
    })
  }
}
