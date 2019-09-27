import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [SingUpComponent, LoginComponent],
  imports: [
    SharedModule,
    CommonModule,
    AuthenticationRoutingModule
  ]
})
export class AuthenticationModule { }
