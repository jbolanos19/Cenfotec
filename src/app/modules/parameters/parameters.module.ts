import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { ParameterComponent } from './parameter/parameter.component';
import { ParameterModalComponent } from './parameter-modal/parameter-modal.component';
import { ParameterParentComponent } from './parameter-parent/parameter-parent.component';
import { ParameterListComponent } from './parameter-list/parameter-list.component';
import { ParameterDetailsComponent } from './parameter-details/parameter-details.component';


@NgModule({
  declarations: [ParameterComponent, ParameterModalComponent, ParameterParentComponent, ParameterListComponent, ParameterDetailsComponent],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }
