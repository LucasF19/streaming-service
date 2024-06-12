import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule, registerLocaleData } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { IonicModule } from '@ionic/angular'; // Adicione o IonicModule
import { AppHome } from "./pages/home/home";
import { MovieService } from "./services/movie.service";
import { AuthGuard } from '../services/auth.guard'; // Ajuste o caminho se necessário
import { CardDescription } from "./pages/card-description/card-description";
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);

export const routes: Routes = [
  { path: '', component: AppHome },
  { path: 'card-description/:id', component: CardDescription },
];

@NgModule({
  declarations: [
    AppHome,
    CardDescription,
  ],
  providers: [
    MovieService,
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeModule {}