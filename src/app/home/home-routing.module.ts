import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import {HomeComponent} from './home/home.component';
import { NewestComponent } from './newest/newest.component';
const routes: Routes = [
  {component: HomeComponent,path:""},
  {component: NewestComponent, path:"newest"},
  {component: NewestComponent,path:"newest/:id"},
  {component: CommentsComponent, path:"comments"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
