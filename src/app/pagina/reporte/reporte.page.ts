import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.page.html',
  styleUrls: ['./reporte.page.scss'],
})
export class ReportePage implements OnInit {

  public fechas: string = "";
  public usuario: any;
  public idp: string = "";
  public urlexterna: string;


  public elemen ={
    tiempo1:'',
    tiempo2:'',
    id:'',
  };

  constructor(public httpClient: HttpClient,private router: Router, public app: AppComponent) {

    this.usuario = this.app.cosultaUser();
    if(this.usuario[5] != null){
      this.fechas = this.usuario[5]['fecha'];
      this.idp = this.usuario[5]['id'];

    }

    this.urlexterna = 'https://apptdi.com/apptdi1.1/';

   }

  ngOnInit() {
  }
  recortar(campo: any){
    let res = campo.split("T");
    return res[0];
  }

  consultar(){
    this.httpClient.get(this.urlexterna +'modelo/reporteOperacion.php?idp='+ this.idp +'&tiempo1='+this.recortar(this.elemen.tiempo1)+'&tiempo2='+this.recortar(this.elemen.tiempo2)).subscribe(
     (data: any)  => {

      location.href = this.urlexterna + 'modelo/' + data ;
     },error => error = error);
   }

}
