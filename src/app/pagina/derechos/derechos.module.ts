import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DerechosPageRoutingModule } from './derechos-routing.module';
import { ComponentsModule } from "../../components/components..module";

import { DerechosPage } from './derechos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DerechosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DerechosPage]
})
export class DerechosPageModule {}
