import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinamicoPedidosPage } from './dinamico-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: DinamicoPedidosPage
  },
  {
	path: 'agregar-pedido',
	loadChildren: () => import('./agregar-pedido/agregar-pedido.module').then(m => m.AgregarPedidoPageModule)
},
  {
    path: 'respuestaserver',
    loadChildren: () => import('src/app/respuestaserver/respuestaserver.module').then( m => m.RespuestaserverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinamicoPedidosPageRoutingModule {}
