import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss']
})
export class LoginPage {

  email: string = '';
  password: string = '';
  errorMessage: string | null = null; // Variável para armazenar a mensagem de erro

  constructor(private authService: AuthService) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
    } catch (error: any) { // Especifica o tipo de 'error' como 'any'
      this.errorMessage = error.message; // Captura a mensagem de erro e a armazena na variável
    }
  }


    loginWithGoogle() {
      this.authService.loginWithGoogle();
    }

}