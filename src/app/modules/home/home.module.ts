import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LoadComponent } from './load/load.component';
import { LoadModalComponent } from './load-modal/load-modal.component';


@NgModule({
  declarations: [LoadComponent, LoadModalComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  entryComponents: [LoadModalComponent]
})
export class HomeModule { }
