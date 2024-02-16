import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DerechosPage } from './derechos.page';

const routes: Routes = [
  {
    path: '',
    component: DerechosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DerechosPageRoutingModule {}
