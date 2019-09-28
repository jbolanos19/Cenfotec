import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { ParameterComponent } from './parameter/parameter.component';
import { ParameterModalComponent } from './parameter-modal/parameter-modal.component';


@NgModule({
  declarations: [ParameterComponent, ParameterModalComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
