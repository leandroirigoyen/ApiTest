import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CedulafrentePage } from './cedulafrente.page';

const routes: Routes = [
  {
    path: '',
    component: CedulafrentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CedulafrentePageRoutingModule {}
