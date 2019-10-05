import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BallotComponent } from './ballot/ballot.component';


const routes: Routes = [
  { 
    path: "", component: BallotComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BallotsRoutingModule { }
