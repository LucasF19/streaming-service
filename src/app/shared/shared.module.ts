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
  Star,
  Play,
  ArrowLeft,
  ArrowRight,
  Pause,
  MessageCircle,
  Frown,
  Bookmark,
  CornerUpLeft,
  ChevronLeft,
  X
} from 'angular-feather/icons';

import { MovieCardComponent, WhereToWatchModalComponent } from './components';

const icons = {
  Camera,
  Heart,
  Github,
  Instagram,
  Linkedin,
  Star,
  Play,
  ArrowLeft,
  ArrowRight,
  Pause,
  MessageCircle,
  Frown,
  Bookmark,
  CornerUpLeft,
  ChevronLeft,
  X
};

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MovieCardComponent, WhereToWatchModalComponent],
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
    MovieCardComponent,
    FeatherModule,
    WhereToWatchModalComponent
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
