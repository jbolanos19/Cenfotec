import { Component, OnInit } from '@angular/core';
import { CONFIG } from '../../../config/config.module';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../../core/services/authentication.service";

@Component({
  selector: 'Final-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isLoggedIn: boolean = false;
  public emailPattern: any = CONFIG.patterns.email;

  constructor(private readonly route: Router,
    private readonly authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  public login(form: NgForm): void {
    const { email, password } = form.value;

    if (this.authenticationService.login(form.value)) {
      window.alert("Login con éxito. Bienvenido al sistema IPIF");
      this.route.navigate(['/home'])
    } else 
    {
      window.alert("Por favor verifique el usuario y la contraseña. Acceso denegado");
    };
  }

  public gotoSingUp() {
    this.route.navigate(["/sign-up"]);
  }

}
