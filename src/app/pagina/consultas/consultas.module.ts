import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultasPageRoutingModule } from './consultas-routing.module';
import { ComponentsModule } from "../../components/components..module";

import { ConsultasPage } from './consultas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConsultasPage]
})
export class ConsultasPageModule {}
