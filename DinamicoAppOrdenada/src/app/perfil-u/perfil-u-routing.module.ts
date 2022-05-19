import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilUPage } from './perfil-u.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilUPageRoutingModule {}
