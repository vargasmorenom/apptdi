import { Component, OnInit } from '@angular/core';
import { DecisionesService } from 'src/app/servicio/decisiones.service';
import { AppComponent } from 'src/app/app.component';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.page.html',
  styleUrls: ['./consultas.page.scss'],
})
export class ConsultasPage implements OnInit {
  public pagina: String;
  public ten: any;
  public loc: any;
  public loc1: any;
  public cont: any;
  public cont1: any;
  public cont2: any;
  public resultado: any;
  public tiempo: any;
  public arrayb: any;
  public marco: any;
  public data: any;
  public myForm: FormGroup = new FormGroup({});
  public urlexterna = 'https://apptdi.com/apptdi1.1/';
  public operacion = 10;

  consulta ={
    activos:'',
    valini:'',
    tiempo:'',
    data1:'',
    data3:'',
    data4:''
  };

  constructor(private contenido: DecisionesService, private enlace: AppComponent, private httpClient: HttpClient, private alertController: AlertController) {
    this.ten = this.contenido.ten;
    this.loc = this.contenido.loc;
    this.cont = this.contenido.cont;
    this.tiempo = this.contenido.tiempo;
    this.resultado = this.contenido.resultado;
    this.data = this.enlace.cosultaUser();
    this.pagina = "Operaciones";

   }

  ngOnInit() {
  }

  onSelectChange2(selectedValue: any)
  {
    this.cont2 = selectedValue.detail.value;
    let tenden = document.getElementById("tenden");
    if(this.cont2 != null && tenden){
      tenden.removeAttribute("disabled");
    }
  }
  onSelectChange(selectedValue: any)
  {
    this.loc1 =  this.loc[0][selectedValue.detail.value];
  }
  onSelectChange1(selectedValue: any)
  { this.cont1 =  this.cont[0][selectedValue.detail.value];
  }

  sumarTiempo(tiempo: any){
    let dformat = this.enlace.dformat;
    let tiempoini = new Date();
    let tiempooperacion = new Date();
    let tipo;

    if((tiempo % 5) == 0  ){
      tiempooperacion.setMinutes(tiempooperacion.getMinutes() + tiempo);
      tipo = 'Minutos';
    }else{
      tiempooperacion.setHours(tiempooperacion.getHours() + tiempo);
      tipo = 'Horas';
    }
    return Array(dformat.format(tiempoini),dformat.format(tiempooperacion),tipo);
  }

  guardarData(camposoperacion : any){

    let man = this.enlace.consultaStore("listadoOperaciones");

        if(this.operacion > man[0]['camposOper'].length){

            this.enlace.crearStore(camposoperacion);
            this.guardarDta(JSON.stringify(camposoperacion));
            this.guardarAlert();

        }else{
          this.presentAlert();

        }


    }

    consultar(){
      const tm = this.cont2.split('-');
      const timp = this.sumarTiempo(parseInt(tm[1], 10));
      this.consulta.tiempo = tm[1];
      const tiempofinal = timp[1];
      const tiempoinicio = timp[0];
      const idpm : any = localStorage.getItem('datospersona');
      let idp = JSON.parse(idpm) || null;
      let m ={
      id: Math.floor(Math.random()*(100000000+1)),
      idp:idp[5]['id'],
      tiempo:this.consulta.tiempo + ' ' +timp[2],
      valorIni: this.consulta.valini,
      tiempoini: tiempoinicio,
      tiempofin: tiempofinal,
      activos: this.consulta.activos,
      accion: this.resultado[0][this.consulta.data4][0]['accion'],
      prioridas: this.resultado[0][this.consulta.data4][0]['prioridas'],
      grabar:this.resultado[0][this.consulta.data4][0]['guardar'],
      mensaje:'',
      class:'',
      estado:'',
      activo: 1,
      acciones: this.consulta.data4};
      this.guardarData(m);
    }

    async presentAlert() {
      const alert = await this.alertController.create({
        header: '!!Alerta',
        subHeader: 'Informacion Importante',
        message: 'Superaste las 3 operaciones continuas.',
        buttons: ['OK']
      });

      await alert.present();
    }

    async guardarAlert() {
      const alert = await this.alertController.create({
        header: '',
        subHeader: 'Se Genero la Operacion de Manera Correcta',
        buttons: ['OK']
      });

      await alert.present();
    }

    guardarDta(datos: any){
      const options = {
        headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       }
     };

      this.httpClient.post(this.urlexterna + 'modelo/nuevaOperacion.php',datos,options).subscribe((data: object)=>{
        if(data){
          console.log(data);
        }
      },
      (err)=>{
        console.log(err);
      }
      );

     }

}
