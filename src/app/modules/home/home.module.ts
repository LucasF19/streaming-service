import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { AppHome } from "./pages/home/home";
import { TmdbService } from "./services/tmdb.service";

export const routes: Routes = [
  { path: '', component: AppHome },
];

@NgModule({
  declarations: [
    AppHome, 
  ],
  providers:[
    TmdbService,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    SharedModule
  ],
  exports: [RouterModule],
})

export class HomeModule {}
