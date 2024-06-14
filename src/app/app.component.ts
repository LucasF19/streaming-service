import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  isLoading: boolean = false;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;

    try {
      const result = await this.afAuth.getRedirectResult();

      if (result.user) {
        if (result.additionalUserInfo?.isNewUser) {
          const uid = result.user.uid;
          const email = result.user.email;
          const nome = result.user.displayName;

          if (uid && email && nome) {
            await this.firestore
              .collection('users')
              .doc(uid)
              .set({ nome, email });
          }
        }

        this.router.navigate(['/home']);
      }
    } catch (error) {
      console.error('Erro ao processar o redirecionamento de login com Google:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
