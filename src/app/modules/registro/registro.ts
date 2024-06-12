import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.html',
  styleUrls: ['registro.scss'],
})
export class RegistroPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private authService: AuthService) {}

  registrarUsuario(registroForm: NgForm) {
    if (registroForm.invalid) {
      console.error('Erro: Campos inválidos');
      return;
    }

    const { nome, email, senha, confirmarSenha } = registroForm.value;

    if (senha !== confirmarSenha) {
      console.error('Erro: As senhas não coincidem');
      return;
    }

    this.authService
      .registrarUsuario(email, senha, nome)
      .then(() => {
        console.log('Usuário registrado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao registrar o usuário:', error);
      });
  }

  validarEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
