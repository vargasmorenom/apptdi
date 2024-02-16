import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public componente: any;
  public salida: any;
  public usuario:any;
  public datam = ['nombre' + ' ' + 'apellido','correo','campo','campo','inactivo'];
  public valor = [{camposOper:[]}];
  public dformat: any = new Intl.DateTimeFormat('en-US',{'month':'numeric','day':'numeric','year':'numeric','hour':'numeric','minute':'numeric'});

  constructor() {

     this.crearUser(this.datam);

     const localstore: any = localStorage.getItem('datospersona');
     this.usuario = JSON.parse(localstore) || null ;

    let dta = this.horaGlobal();



  }


  crearRepositorioLocal = (nombre:String) =>{

   // localStorage.setItem('listadoOperaciones', JSON.stringify(resul));

  }

   crearStore = (dta:any) =>{
      const resul = this.consultaStore("listadoOperaciones");

      if(resul){
        resul[0]['camposOper'].push(dta);
        localStorage.setItem('listadoOperaciones', JSON.stringify(resul));

      }

   }

   consultaStore = (campoStore: string) =>{

    const datosStrore: any = localStorage.getItem(campoStore);

      if(datosStrore === null || datosStrore === undefined){
        const valor: any = [{camposOper:[]}];

          return valor;

      }

      if(datosStrore !== null || datosStrore !== undefined){

        return JSON.parse(datosStrore);
    }
  }

  cosultaUser = () => {
    if(localStorage.getItem('datospersona') != undefined){
      const data: any  = localStorage.getItem("datospersona");
      return JSON.parse(data);


    }
  }

  crearUser = (dta:any)=>{
    const resul = localStorage.getItem('datospersona');
    if(resul == undefined  && resul == null){
    localStorage.setItem('datospersona', JSON.stringify(dta));

    }

 }

 actualizarUser = (dta:any)=>{

  localStorage.setItem('datospersona', JSON.stringify(dta));
  }

  horaGlobal(){

    let tiempo = new Date();
    return this.dformat.format(tiempo);
   }

   horaNumeros(date: any){
    let dt = date.replace(/\//g,'');
    dt = dt.replace(' ','');
    dt = dt.replace(':','');
    dt = dt.replace(',','');
    dt = dt.replace('AM','');
    dt = dt.replace('PM','');
    return dt;

   }

}
