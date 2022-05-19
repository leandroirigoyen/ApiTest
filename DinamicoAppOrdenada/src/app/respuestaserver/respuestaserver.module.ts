import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RespuestaserverPageRoutingModule } from './respuestaserver-routing.module';

import { RespuestaserverPage } from './respuestaserver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RespuestaserverPageRoutingModule
  ],
  declarations: [RespuestaserverPage]
})
export class RespuestaserverPageModule {}
