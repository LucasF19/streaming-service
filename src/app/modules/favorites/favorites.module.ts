import { NgModule, LOCALE_ID } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule, registerLocaleData } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { MovieService } from "../home/services/movie.service";
import localePt from '@angular/common/locales/pt';
import { FavoritesPage } from "./pages/favorites/favorites";

registerLocaleData(localePt);

export const routes: Routes = [
  { path: '', component: FavoritesPage },
];

@NgModule({
  declarations: [FavoritesPage],
  providers: [
    MovieService,
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule,
  ],
  exports: [RouterModule],
})

export class FavoritesModule {}
