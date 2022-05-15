import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RespuestaserverPage } from './respuestaserver.page';

const routes: Routes = [
  {
    path: '',
    component: RespuestaserverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RespuestaserverPageRoutingModule {}
