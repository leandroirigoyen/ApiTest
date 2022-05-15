import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinamicoPedidosPageRoutingModule } from './dinamico-pedidos-routing.module';

import { DinamicoPedidosPage } from './dinamico-pedidos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinamicoPedidosPageRoutingModule
  ],
  declarations: [DinamicoPedidosPage]
})
export class DinamicoPedidosPageModule {}
