import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { AppHome } from "./pages/home/home";
import { MovieService } from "./services/movie.service";
import { CardDescription } from "./pages/card-description/card-description";

export const routes: Routes = [
  { path: '', component: AppHome },
  { path: 'card-description/:id', component: CardDescription },
];

@NgModule({
  declarations: [
    AppHome,
    CardDescription,
  ],
  providers:[
    MovieService,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule],
})

export class HomeModule {}
