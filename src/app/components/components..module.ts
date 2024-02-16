import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeadersComponent } from './headers/headers.component';
import { MenuBajoComponent } from './menu-bajo/menu-bajo.component';
import { NousuarioComponent } from './nousuario/nousuario.component';



@NgModule({
  declarations: [HeadersComponent,MenuBajoComponent,NousuarioComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[HeadersComponent,MenuBajoComponent,NousuarioComponent]

})
export class ComponentsModule { }
