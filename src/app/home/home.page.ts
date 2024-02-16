import { Component } from '@angular/core';
import { ContenidoHomeService } from '../servicio/contenido-home.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public idio: any;
  public data: any;
  public localstore: any;
  public salida: any;
  public salidaDatos: any;



  constructor(private contenbasico: ContenidoHomeService,private app: AppComponent) {


  this.localstore = localStorage.getItem('datospersona');


  }

  ngOnInit() {


    this.saludo(this.localstore);

  }

  cargamenu(compon:any) {

    if(compon != null){
      this.idio = this.contenbasico.campode[0]['es'];
    }

    if(compon === null){
      this.idio = this.contenbasico.campode01[0]['es'];
    }



  }
  saludo(listado:any){
    setTimeout(()=>{
      this.cargamenu(listado );
    },100)
  }

}


