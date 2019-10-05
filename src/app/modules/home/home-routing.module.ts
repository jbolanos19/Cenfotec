import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoadComponent} from './load/load.component';
import { LoadModalComponent } from "./load-modal/load-modal.component";


const routes: Routes = [
  { 
    path: "", 
    component: LoadComponent
  },
  { 
    path: "load-modal", 
    component: LoadModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
