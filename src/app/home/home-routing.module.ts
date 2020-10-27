import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { NewestComponent } from './newest/newest.component';
const routes: Routes = [
  {component: HomeComponent,path:""},
  {component: HomeComponent, path:"top/:id"},
  {component: NewestComponent, path:"newest"},
  {component: NewestComponent,path:"newest/:id"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
