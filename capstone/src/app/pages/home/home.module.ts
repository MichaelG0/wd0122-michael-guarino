import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostCardComponent } from 'src/app/components/post-card/post-card.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostCardComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
