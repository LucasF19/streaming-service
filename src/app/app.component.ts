import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './modules/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        // Usuário está autenticado, redireciona para a página principal
        this.router.navigate(['/']);
      } else {
        // Usuário não está autenticado, redireciona para a página de login
        this.router.navigate(['/login']);
      }
    });
  }
}
