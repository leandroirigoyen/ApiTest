import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CeduladorsoPage } from './ceduladorso.page';

const routes: Routes = [
  {
    path: '',
    component: CeduladorsoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CeduladorsoPageRoutingModule {}
