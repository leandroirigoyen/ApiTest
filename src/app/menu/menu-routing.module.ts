import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
	children: [{
			path: 'servicios',
			children: [
				{
					path: '',
					loadChildren: () => import('../servicios/servicios.module').then(m => m.ServiciosPageModule),
				},
				{
					path: 'dinamico-pedidos',
					children: [
					{
					path: ':dinamico-pedidosId',
					loadChildren: () => import('../servicios/dinamico-pedidos/detalle-pedido/detalle-pedido.module').then(m => m.DetallePedidoPageModule)
				},
			]
				},
					]
		  },
		  {
			path: 'entradas',
			loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)

	}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
