import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MovieService } from '../../services/movie.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class AppHome implements OnInit{
  nomeUsuario: string = '';
  
  releasesMovies = [];
  actionMovies = [];
  animationMovies = [];
  avatar = '/docs/images/people/profile-picture-5.jpg';

  constructor(private movieService: MovieService, private authService: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.carregarNomeUsuario();
    
    this.getAllMovies();
    this.getAnimationMovies();
    this.getActionMovies();
  }

  getAllMovies(){
    this.movieService.getReleasesMovies().subscribe((data: any) => {
      this.releasesMovies = data.results;
    });
  }

  getAnimationMovies(){
    this.movieService.getMoviesByGenre(16).subscribe((data: any) => {
      this.animationMovies = data.results;
    });
  }

  getActionMovies(){
    this.movieService.getMoviesByGenre(18).subscribe((data: any) => {
      this.actionMovies = data.results;
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
