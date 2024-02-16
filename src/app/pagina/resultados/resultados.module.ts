import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadosPageRoutingModule } from './resultados-routing.module';
import { ComponentsModule } from "../../components/components..module";

import { ResultadosPage } from './resultados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResultadosPage]
})
export class ResultadosPageModule {}
