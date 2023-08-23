import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Check';
  http = inject(HttpClient);

  ngOnInit() {
    const apiKey = '936ddc953bd14900e5c528a00d324cc7';
    const params = new HttpParams().set('api_key', apiKey);
    this.http.get('https://api.themoviedb.org/3/discover/movie', { params })
    .subscribe((data:any) => {
      console.log(data);
    })
  }
}
