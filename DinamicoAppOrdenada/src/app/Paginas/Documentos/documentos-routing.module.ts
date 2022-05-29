import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DocumentosPage } from './documentos.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentosPage
  },
  {
    path: 'licenciafrente',
    loadChildren: () => import('./licenciafrente/licenciafrente.module').then( m => m.LicenciafrentePageModule)
  },
  {
    path: 'licenciadorso',
    loadChildren: () => import('./licenciadorso/licenciadorso.module').then(m => m.LicenciadorsoPageModule)
  },
  {
    path: 'cedulafrente',
    loadChildren: () => import('./cedulafrente/cedulafrente.module').then(m => m.CedulafrentePageModule)
  },
  {
    path: 'ceduladorso',
    loadChildren: () => import('./ceduladorso/ceduladorso.module').then(m => m.CeduladorsoPageModule)
  }


  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocumentosPageRoutingModule {}
