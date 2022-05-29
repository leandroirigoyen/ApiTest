import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicenciafrentePage } from './licenciafrente.page';

const routes: Routes = [
  {
    path: '',
    component: LicenciafrentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicenciafrentePageRoutingModule {}
