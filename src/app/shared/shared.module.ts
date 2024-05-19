import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatherModule } from 'angular-feather';
import {
  Camera,
  Heart,
  Github,
  Instagram,
  Linkedin,
} from 'angular-feather/icons';

import { MovieCardComponent, TitleComponent } from './components';

const icons = {
  Camera,
  Heart,
  Github,
  Instagram,
  Linkedin,
};

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TitleComponent, MovieCardComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FeatherModule.pick(icons),
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TitleComponent,
    MovieCardComponent,
    FeatherModule,
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
