import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

interface UserData {
  nome: string;
  // Outros campos, se houver
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore, // Importe o AngularFirestore
    private router: Router
  ) { }

  async login(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']); // Navegar para a página principal após o login
    } catch (error) {
      console.error("Erro ao fazer login: ", error);
      throw new Error('Email ou senha inválidos.'); // Lança um erro para lidar com a mensagem de erro na interface do usuário
    }
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']); // Navegar para a página de login após o logout
    } catch (error) {
      console.error("Erro ao fazer logout: ", error);
    }
  }

  getAuthState() {
    return this.afAuth.authState;
  }

  async registrarUsuario(email: string, senha: string, nome: string): Promise<void> {
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(email, senha);
      const uid = userCredential.user?.uid;

      console.log('UID do usuário:', uid); // Verifique se o UID do usuário está sendo obtido corretamente

      await this.firestore.collection('users').doc(uid).set({ nome, email });

      console.log('Usuário registrado com sucesso:', { nome, email }); // Verifique se os dados do usuário estão sendo gravados corretamente

      this.router.navigate(['/']); // Redirecione o usuário para a página principal após o registro
    } catch (error) {
      console.error('Erro ao registrar o usuário:', error);
    }
  }

  async getNomeUsuario(uid: string): Promise<string | null> {
    try {
      const doc = await this.firestore.collection('users').doc(uid).get().toPromise();
      if (doc && doc.exists) { // Verifica se doc é definido e se existe
        const data = doc.data() as UserData; // Especifica o tipo de dados como UserData
        return data.nome || null; // Retorna o nome se estiver presente
      } else {
        return null;
      }
    } catch (error) {
      console.error('Erro ao obter nome do usuário:', error);
      return null;
    }
  }

  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const result = await this.afAuth.signInWithPopup(provider);

      // Verificar se é um novo usuário
      if (result.additionalUserInfo?.isNewUser) {
        const uid = result.user?.uid;
        const email = result.user?.email;
        const nome = result.user?.displayName;

        if (uid && email && nome) {
          await this.firestore.collection('users').doc(uid).set({ nome, email });
        }
      }
      this.router.navigate(['/home']); // Navegar para a página principal após o login
    } catch (error) {
      console.error('Erro ao fazer login com Google:', error);
    }
  }

}
