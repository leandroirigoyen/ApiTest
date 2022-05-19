import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPsPage } from './registro-ps.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPsPageRoutingModule {}
