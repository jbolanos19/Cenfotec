import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";
import { InterceptorService } from "./services/interceptor.service";
import { AuthenticationService } from "./services/authentication.service";
import { LocalstorageService } from "./services/localstorage.service";
import { UsersService } from './data-services/users.service';
import { ParametersService } from './data-services/parameters.service';
import { BallotsService } from './data-services/ballots.service';
import { from } from 'rxjs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule,
    AngularFontAwesomeModule
  ],
  exports: [CommonModule, HttpClientModule, HeaderComponent],
  providers: [
    AuthenticationService,
    LocalstorageService,
    UsersService,
    ParametersService,
    BallotsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
