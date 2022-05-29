import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CeduladorsoPageRoutingModule } from './ceduladorso-routing.module';

import { CeduladorsoPage } from './ceduladorso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CeduladorsoPageRoutingModule
  ],
  declarations: [CeduladorsoPage]
})
export class CeduladorsoPageModule {}
