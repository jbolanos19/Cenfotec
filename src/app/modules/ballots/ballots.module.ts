import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BallotsRoutingModule } from './ballots-routing.module';
import { BallotComponent } from './ballot/ballot.component';


@NgModule({
  declarations: [BallotComponent],
  imports: [
    CommonModule,
    BallotsRoutingModule
  ]
})
export class BallotsModule { }
