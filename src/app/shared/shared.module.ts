import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FeatherModule } from 'angular-feather';
import {
  Home,
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
  X,
  Search,
  LogOut,
  Tv,
  Users
} from 'angular-feather/icons';

import { MovieCardComponent, WhereToWatchModalComponent, MobileTabsComponent } from './components';

const icons = {
  Home,
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
  X,
  Search,
  LogOut,
  Tv,
  Users
};

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [MovieCardComponent, WhereToWatchModalComponent, MobileTabsComponent],
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
    WhereToWatchModalComponent,
    MobileTabsComponent
  ],
  providers: [],
})
export class SharedModule {
  constructor() {}
}
