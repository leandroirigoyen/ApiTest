import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
  },
  {
    path: 'dinamico-pedidos',
    loadChildren: () => import('./dinamico-pedidos/dinamico-pedidos.module').then( m => m.DinamicoPedidosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}
