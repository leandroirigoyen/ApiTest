import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FletesPageRoutingModule } from './fletes-routing.module';

import { FletesPage } from './fletes.page';
import { DetalleFleteComponent } from 'src/app/Componentes/detalle-flete/detalle-flete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FletesPageRoutingModule
  ],
  declarations: [FletesPage, DetalleFleteComponent]
})
export class FletesPageModule {}
