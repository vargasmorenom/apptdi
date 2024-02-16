import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-activacion',
  templateUrl: './activacion.page.html',
  styleUrls: ['./activacion.page.scss'],
})
export class ActivacionPage implements OnInit {

  public pagina: string;
  public pruebacont :any;

  public data: any;
  public datam: any;
  public urlexterna = 'https://apptdi.com/apptdi1.1/';

  public activa = {
    nombres: '',
    apellidos: '',
    correo: '',
    termino: ''
  };

  public valida = {
    id: '',
    codigo: ''
  };


  constructor(public httpClient: HttpClient, private router: Router, public urlportal: AppComponent) {

      this.pagina = "Activacion de Cuenta";
      this.data = localStorage.getItem('datospersona');
      this.data = JSON.parse(this.data);

  }

  ngOnInit() {
  }

  activar() {
    const options = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'

     }
    };

   this.datam = [this.activa.nombres + ' ' + this.activa.apellidos,this.activa.correo,this.activa.apellidos,this.activa.nombres,'pendiente'];

    this.httpClient.post(this.urlexterna +'modelo/nuevaPersona.php',JSON.stringify(this.activa),options).subscribe((data: any)=>{
      if(data){
        this.datam.push(data);
        localStorage.setItem('datospersona', JSON.stringify(this.datam));

        if(localStorage.getItem('datospersona') != null){
          this.router.navigate(['/home']);
        }


      }


    },
    (err)=>{
      console.log(err);
    }
    );
  }

  validar(){

    let datm = JSON.stringify({id:this.data['5']['id'],codigo:this.valida.codigo});

    this.httpClient.get(this.urlexterna +'modelo/activacion.php?data='+datm).subscribe(rest =>{
      if(rest){
         this.data['4'] = rest == 1 ? 'Activa':'pendiente';
         this.urlportal.actualizarUser(this.data);
      }

    });
  }





  ira(){
    this.router.navigate(['/derechos']);
  }



}
