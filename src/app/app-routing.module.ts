import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";


const routes: Routes = [
  {
    path: "",
    loadChildren: "./modules/authentication/authentication.module#AuthenticationModule"
  },
  {
    path: "users",
    loadChildren: "./modules/users/users.module#UsersModule"
  },
  {
    path: "parameters",
    loadChildren: "./modules/parameters/parameters.module#ParametersModule"
  },
  {
    path: "ballots",
    loadChildren: "./modules/ballots/ballots.module#BallotsModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
