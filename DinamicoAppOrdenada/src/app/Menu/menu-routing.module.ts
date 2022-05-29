/* eslint-disable max-len */
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
					loadChildren: () => import('../Paginas/Pagina Servicios/Servicios/servicios.module').then(m => m.ServiciosPageModule),
				},
					]
		  },
		  {
			path: 'entradas',
			loadChildren: () => import('../Paginas/Pagina Servicios/Servicios/dinamico-pedidos/Papelera/entradas.module').then( m => m.EntradasPageModule)
			

	},
	{
		path: 'ajustes',
		loadChildren: () => import('../Paginas/ajustes/ajustes.module').then( m => m.AjustesPageModule)
	  },
	  {
		path: 'documentos',
		loadChildren: () => import('../Paginas/documentos/documentos.module').then( m => m.DocumentosPageModule)
	  }]
	
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
