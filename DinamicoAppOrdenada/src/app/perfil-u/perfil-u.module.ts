import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilUPageRoutingModule } from './perfil-u-routing.module';

import { PerfilUPage } from './perfil-u.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilUPageRoutingModule
  ],
  declarations: [PerfilUPage]
})
export class PerfilUPageModule {}
