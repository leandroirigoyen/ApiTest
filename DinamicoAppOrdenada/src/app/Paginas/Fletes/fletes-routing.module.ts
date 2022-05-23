import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FletesPage } from './fletes.page';

const routes: Routes = [
  {
    path: '',
    component: FletesPage
  },
  {
    path: 'crear-publicacion',
    loadChildren: () => import('../../Paginas/Fletes/crear-publicacion/crear-publicacion.module').then( m => m.CrearPublicacionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FletesPageRoutingModule {}
