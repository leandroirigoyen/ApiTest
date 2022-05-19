import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinamicoPedidosPageRoutingModule } from './dinamico-pedidos-routing.module';

import { DinamicoPedidosPage } from './dinamico-pedidos.page';
import { DetallePedidoComponent } from 'src/app/Componentes/detalle-pedido/detalle-pedido.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinamicoPedidosPageRoutingModule,
  ],
  declarations: [DinamicoPedidosPage, DetallePedidoComponent]
})
export class DinamicoPedidosPageModule {}
