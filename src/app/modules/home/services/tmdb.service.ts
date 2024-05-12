import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {
  private apiKey = '9b79117faf1a51cecdc05b3eb644493a';
  private apiUrl = 'https://api.themoviedb.org/3';
  private token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Yjc5MTE3ZmFmMWE1MWNlY2RjMDViM2ViNjQ0NDkzYSIsInN1YiI6IjY2M2ZmZjI5YzEwZDRiZTNlODBiM2JmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p9__j1I2GBcLzHHIlRhpbDMTJzJHjyxKOOln1fuOWGo';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey
      }
    });
  }
}