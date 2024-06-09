import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { IonicModule } from '@ionic/angular'; // Adicione o IonicModule
import { AppHome } from "./pages/home/home";
import { MovieService } from "./services/movie.service";
import { AuthGuard } from '../services/auth.guard'; // Ajuste o caminho se necessário

export const routes: Routes = [
  { path: '', component: AppHome, canActivate: [AuthGuard] }, // Proteja a rota com o AuthGuard
];

@NgModule({
  declarations: [
    AppHome, 
  ],
  providers: [
    MovieService,
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule, // Adicione o IonicModule aqui
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeModule {}
