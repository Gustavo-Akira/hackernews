import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CommentsComponent } from './comments/comments.component';
import { NewestComponent } from './newest/newest.component';


@NgModule({
  declarations: [HomeComponent, CommentsComponent, NewestComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
