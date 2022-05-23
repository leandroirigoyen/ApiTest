import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresadoGuard } from './Guards/ingresado.guard';
import { NoIngresadoGuard } from './Guards/no-ingresado.guard';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./Paginas/Logins/login/login.module').then( m => m.LoginPageModule),
	canActivate: [NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./Paginas/Registros/registro-u/registro.module').then( m => m.RegistroPageModule),
	canActivate: [NoIngresadoGuard]
	},
	
  {
    path: 'respuestaservidor',
    loadChildren: () => import('./respuestaserver/respuestaserver.module').then( m => m.RespuestaserverPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./Menu/menu.module').then( m => m.MenuPageModule), canActivate: [IngresadoGuard]
  },
  {
    path: 'bienvenida',
    loadChildren: () => import('./Paginas/Bienvenida/bienvenida.module').then( m => m.BienvenidaPageModule)
  },
  {
    path: 'pre-registro',
    loadChildren: () => import('./Paginas/Registros/pre-registro/pre-registro.module').then( m => m.PreRegistroPageModule)
  },
  {
    path: 'registro-ps',
    loadChildren: () => import('./Paginas/Registros/registro-ps/registro-ps.module').then( m => m.RegistroPsPageModule)
  },
  {
	path: 'perfil-u',
	loadChildren: () => import('./perfil-u/perfil-u.module').then( m => m.PerfilUPageModule)
  },
  {
    path: 'fletes',
    loadChildren: () => import('./Paginas/fletes/fletes.module').then( m => m.FletesPageModule)
  },
 
	]
		



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
