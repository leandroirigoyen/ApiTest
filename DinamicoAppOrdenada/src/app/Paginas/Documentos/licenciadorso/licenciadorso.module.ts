import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LicenciadorsoPageRoutingModule } from './licenciadorso-routing.module';

import { LicenciadorsoPage } from './licenciadorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LicenciadorsoPageRoutingModule
  ],
  declarations: [LicenciadorsoPage]
})
export class LicenciadorsoPageModule {}
