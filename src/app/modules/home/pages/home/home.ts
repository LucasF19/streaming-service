import { Component, Input, OnInit, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../../services/auth.service';
import { Genre, Movie } from '../../interfaces/home-interface';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})

export class AppHome implements OnInit {
  nomeUsuario: string = '';
  searchControl: FormControl = new FormControl('');
  releasesMovies: any[] = [];
  genresMovies: { [key: string]: any[] } = {};
  filteredMovies: any[] = [];
  allMovies!: Array<any>;
  emptyFilter!: boolean;
  isLoading = true;
  searching!: boolean;

  typesMovie: Genre[] = [];

  constructor(private movieService: MovieService, private authService: AuthService, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit(): void {
    this.carregarNomeUsuario();
    this.getTypesList();
    this.getAllMovies();

    this.searchControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
      this.filterMovies(value);
    });
  }


  filterMovies(query: string) {
    this.searching = true;
    this.emptyFilter = false;

    query = query.toLowerCase();
    this.filteredMovies = this.allMovies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );

    if(this.filteredMovies.length === 0){
      this.emptyFilter = true
    }

    if(query.length === 0){
      this.searching = false;
    }
  }

  movieSelectSearch(movieId: string){
    this.router.navigate(['/card-description', movieId]);
  }

  getTypesList() {
    this.movieService.getTypesList().subscribe((data: any) => {
      this.typesMovie = data.genres;
      this.getMoviesByGenres();
    });
  }

  getMoviesByGenres() {
    const allMoviesSet: Set<any> = new Set();
    this.allMovies = [];
  
    this.typesMovie.forEach(genre => {
      this.movieService.getMoviesByGenre(genre.id).subscribe((data: any) => {
        this.genresMovies[genre.name] = data.results;

        data.results.forEach((movie: Movie) => {
          if (!allMoviesSet.has(movie.id)) {
            allMoviesSet.add(movie.id);
            this.allMovies.push(movie);
          }
        });

        this.isLoading = false;
      });
    });
  }

  getAllMovies() {
    this.movieService.getReleasesMovies().subscribe((data: any) => {
      this.releasesMovies = data.results;
      this.isLoading = false;
    });
  }

  logout() {
    this.authService.logout();
  }

  async carregarNomeUsuario() {
    const user = await this.afAuth.currentUser;
    if (user) {
      const uid = user.uid;
      const nome = await this.authService.getNomeUsuario(uid);
      if (nome) {
        this.nomeUsuario = nome;
      }
    }
  }

}