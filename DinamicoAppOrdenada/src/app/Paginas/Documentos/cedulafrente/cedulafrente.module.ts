import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CedulafrentePageRoutingModule } from './cedulafrente-routing.module';

import { CedulafrentePage } from './cedulafrente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CedulafrentePageRoutingModule
  ],
  declarations: [CedulafrentePage]
})
export class CedulafrentePageModule {}
