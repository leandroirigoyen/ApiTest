import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciadorsoPage } from './licenciadorso.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciadorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciadorsoPageRoutingModule {}
