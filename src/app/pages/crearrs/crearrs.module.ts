import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearrsPageRoutingModule } from './crearrs-routing.module';

import { CrearrsPage } from './crearrs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearrsPageRoutingModule
  ],
  declarations: [CrearrsPage]
})
export class CrearrsPageModule {}
