import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BallotDetailsComponent } from './ballot-details/ballot-details.component';
import { BallotListComponent } from './ballot-list/ballot-list.component';
import { BallotParentComponent } from "./ballot-parent/ballot-parent.component";


const routes: Routes = [
  { 
    path: "",
    pathMatch: "full",
    redirectTo: "list"
  },
  {
    path: "",
    component: BallotParentComponent,
    children: [
      { path: "list", component: BallotListComponent },
      { path: "details/:id", component: BallotDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),FormsModule,
    ReactiveFormsModule],
  exports: [RouterModule]
})
export class BallotsRoutingModule { }
