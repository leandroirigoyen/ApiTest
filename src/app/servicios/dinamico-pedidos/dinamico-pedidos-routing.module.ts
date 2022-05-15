import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinamicoPedidosPage } from './dinamico-pedidos.page';

const routes: Routes = [
  {
    path: '',
    component: DinamicoPedidosPage
  },
  {
    path: 'detalle-pedido',
    loadChildren: () => import('../dinamico-pedidos/detalle-pedido/detalle-pedido.module').then( m => m.DetallePedidoPageModule)
  },
  {
    path: 'agregar-pedido',
    loadChildren: () => import('../dinamico-pedidos/agregar-pedido/agregar-pedido.module').then( m => m.AgregarPedidoPageModule)
  },
  {
    path: 'respuestaserver',
    loadChildren: () => import('../respuestaserver/respuestaserver.module').then( m => m.RespuestaserverPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinamicoPedidosPageRoutingModule {}
