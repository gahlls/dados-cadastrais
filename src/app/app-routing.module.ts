import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { SenhaComponent } from './senha/senha.component';
import { TokenComponent } from './token/token.component'; 

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'senha', component: SenhaComponent },
  { path: 'token', component: TokenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [SenhaComponent, TokenComponent]
