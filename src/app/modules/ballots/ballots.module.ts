import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BallotsRoutingModule } from './ballots-routing.module';
import { BallotComponent } from './ballot/ballot.component';
import { BallotModalComponent } from './ballot-modal/ballot-modal.component';
import { BallotDetailsComponent } from './ballot-details/ballot-details.component';
import { BallotListComponent } from './ballot-list/ballot-list.component';
import { BallotParentComponent } from './ballot-parent/ballot-parent.component';


@NgModule({
  declarations: [BallotComponent, BallotModalComponent, BallotDetailsComponent, BallotListComponent, BallotParentComponent],
  imports: [
    CommonModule,
    BallotsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BallotsModule { }
