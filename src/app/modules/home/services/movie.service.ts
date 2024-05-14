import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = '9b79117faf1a51cecdc05b3eb644493a';
  private apiUrl = 'https://api.themoviedb.org/3';
  private language = 'pt-BR';

  constructor(private http: HttpClient) { }

  getAllMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular`, {
      params: {
        api_key: this.apiKey,
        language: this.language
      }
    });
  }

  getMoviesByGenre(genreId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        language: this.language,
        with_genres: genreId.toString()
      }
    });
  }

  getReleasesMovies(): Observable<any> {
    const today = new Date().toISOString().split('T')[0];
    const oneYearAgo = new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toISOString().split('T')[0];

    return this.http.get(`${this.apiUrl}/discover/movie`, {
      params: {
        api_key: this.apiKey,
        language: this.language,
        'primary_release_date.gte': oneYearAgo,
        'primary_release_date.lte': today,
      }
    });
  }
}