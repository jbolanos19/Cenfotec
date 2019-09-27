import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from "src/app/shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule
  ],
  exports: [CommonModule, HttpClientModule, HeaderComponent],
})
export class CoreModule { }
