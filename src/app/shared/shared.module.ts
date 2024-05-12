import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';

import {
  MovieCardComponent,
  TitleComponent,
} from './components';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TitleComponent,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    FeatherModule.pick(allIcons),
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    TitleComponent,
    MovieCardComponent
  ],
  providers: []
})

export class SharedModule {
  constructor() {}
}
