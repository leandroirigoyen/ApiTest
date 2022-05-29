import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciafrentePageRoutingModule } from './licenciafrente-routing.module';

import { LicenciafrentePage } from './licenciafrente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciafrentePageRoutingModule
  ],
  declarations: [LicenciafrentePage]
})
export class LicenciafrentePageModule {}
