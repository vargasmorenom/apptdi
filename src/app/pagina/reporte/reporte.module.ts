import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportePageRoutingModule } from './reporte-routing.module';
import { ComponentsModule } from "../../components/components..module";

import { ReportePage } from './reporte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReportePage]
})
export class ReportePageModule {}
