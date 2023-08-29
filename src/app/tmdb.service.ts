import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '936ddc953bd14900e5c528a00d324cc7';

  constructor(private http:HttpClient) {}

  getMovies(): Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/discover/movie', { params });
  }

  getGenres():Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list', { params });
  }

   getUpcoming():Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming', { params });
   }

   getNowPlaying():Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/movie/now_playing', { params });
   }

   getPopular():Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/movie/popular', { params });
   }

   getLatest():Observable<any> {
    const params = new HttpParams().set('api_key', this.apiKey);
    return this.http.get('https://api.themoviedb.org/3/movie/latest', { params });
   }
}

