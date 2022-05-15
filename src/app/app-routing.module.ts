import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './ingresado.guard';
import { NoIngresadoGuard } from './no-ingresado.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
	canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
	canActivate: [NoIngresadoGuard]
	},
	
	{
		path: 'nuevo-pedido',
		loadChildren: () => import('./servicios/dinamico-pedidos/agregar-pedido/agregar-pedido.module').then(m => m.AgregarPedidoPageModule)
	},
  {
    path: 'respuestaservidor',
    loadChildren: () => import('./servicios/respuestaserver/respuestaserver.module').then( m => m.RespuestaserverPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule), canActivate: [IngresadoGuard]
  },
	]
		



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }