import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallotsRoutingModule } from './ballots-routing.module';
import { BallotComponent } from './ballot/ballot.component';
import { BallotModalComponent } from './ballot-modal/ballot-modal.component';


@NgModule({
  declarations: [BallotComponent, BallotModalComponent],
  imports: [
    CommonModule,
    BallotsRoutingModule
  ]
})
export class BallotsModule { }
