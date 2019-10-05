import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadComponent} from './load/load.component';


const routes: Routes = [
  { 
    path: "", component: LoadComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
