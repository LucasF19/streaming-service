import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from './login';

export const routes: Routes = [
    { path: '', component: LoginPage },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),  // Certifique-se de importar o RouterModule.forChild(routes)
  ],
  declarations: [LoginPage],
  exports: [RouterModule],  // Exporte o RouterModule
})
export class LoginModule {}
