import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroPsPageRoutingModule } from './registro-ps-routing.module';

import { RegistroPsPage } from './registro-ps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroPsPageRoutingModule
  ],
  declarations: [RegistroPsPage]
})
export class RegistroPsPageModule {}
