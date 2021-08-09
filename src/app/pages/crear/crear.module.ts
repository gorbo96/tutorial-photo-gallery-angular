import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';

import { CrearPage } from './crear.page';
import { DemoComponent } from '../../components/demo/demo.component';
import { TakePhotoComponent } from '../../components/take-photo/take-photo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule
  ],
  declarations: [CrearPage,DemoComponent,TakePhotoComponent]
})
export class CrearPageModule {}
