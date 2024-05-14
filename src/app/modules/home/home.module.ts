import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { AppHome } from "./pages/home/home";
import { MovieService } from "./services/movie.service";

export const routes: Routes = [
  { path: '', component: AppHome },
];

@NgModule({
  declarations: [
    AppHome, 
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
