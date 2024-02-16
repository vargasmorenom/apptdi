import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualPageRoutingModule } from './manual-routing.module';
import { ComponentsModule } from "../../components/components..module";

import { ManualPage } from './manual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManualPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ManualPage]
})
export class ManualPageModule {}
