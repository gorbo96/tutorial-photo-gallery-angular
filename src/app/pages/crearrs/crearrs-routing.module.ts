import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearrsPage } from './crearrs.page';

const routes: Routes = [
  {
    path: '',
    component: CrearrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearrsPageRoutingModule {}
