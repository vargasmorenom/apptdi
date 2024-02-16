import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.page.html',
  styleUrls: ['./resultados.page.scss'],
})
export class ResultadosPage implements OnInit {

  public data: any;
  public array: any;
  public validar: string = "";
  public campos: any;
  public urlexterna = 'https://apptdi.com/apptdi1.1/';

  constructor(private router: Router, private active: ActivatedRoute,private app: AppComponent,public alertController: AlertController,public httpClient: HttpClient) {


    this.validar = this.app.cosultaUser();
    this.campos = this.cargaroperaciones();

   }

  ngOnInit() {

  }


  cabiarEstado(data:any){
    return
  }


  borrar(id : any): void{
    this.data = this.app.consultaStore('listadoOperaciones');
    const gua = this.data[0]['camposOper'].filter(function(car:any) {
        return car.id !== id;
    });
  localStorage.removeItem("listadoOperaciones");
  let valor = [{camposOper:[]}];
   valor[0]['camposOper'] = gua;
   localStorage.setItem('listadoOperaciones', JSON.stringify(valor));

}

guardar(val:any,id:any){

  let valore = {iden:id,valor:val};
  this.httpClient.put(this.urlexterna +'modelo/cargaValor.php', JSON.stringify(valore)).subscribe(res => {
    console.log(res);
  });

}


validaractivo(tm2: any,tm1: any, acti: any){

let activo = [{'mensaje':'Operacion Activa','class':'success','estado':'disabled'}];
let final = [{'mensaje':'Operacion Finalizada','class':'danger','estado':'false'}];
let noOperacion = [{'mensaje':'No operacion ','class':'light','estado':'false'}];

if(acti === 1){
   return this.app.horaNumeros(tm1) < this.app.horaNumeros(tm2) ? JSON.stringify(activo) : JSON.stringify(final);
}else{
   return JSON.stringify(noOperacion);
}

}

cargaroperaciones(){

  this.data = this.app.consultaStore('listadoOperaciones');
  if(this.data[0]['camposOper'].length > 0){
    for(let mn=0; this.data[0]['camposOper'].length > mn; mn++){
       if(this.data[0]['camposOper'][mn]['activo'] === 1){

        let valo = JSON.parse(this.validaractivo(this.data[0]['camposOper'][mn]['tiempofin'],this.app.horaGlobal(),this.data[0]['camposOper'][mn]['grabar']));
        this.data[0]['camposOper'][mn]['mensaje'] = valo[0]['mensaje'];
        this.data[0]['camposOper'][mn]['class'] = valo[0]['class'];
        this.data[0]['camposOper'][mn]['estado'] = valo[0]['estado'];

       }
    }
    return this.data[0]['camposOper'];
  }


}

async cerrarOpe(id: any) {

const alert = await this.alertController.create({
  header: 'Cerrar Operacion',
  subHeader: 'Informacion Importante',
  message: 'El campo Valor es Obligatorio.',
  inputs: [
    {
      name: 'valorfinal',
      placeholder: 'Valor de activo'

    },
  ],
  buttons: [{
    text:"guardar",
    handler:(data)=>{
      if(data.valorfinal > 0){
      this.guardar(data.valorfinal,id);
      this.borrar(id);
      this.remover(id);
      this.router.navigate(['/resultados']);
      }
    }
  }]
});
await alert.present();
}

remover(id: any){
let el: any = document.getElementById(id);

setTimeout(function(){ el.parentNode.removeChild(el)}, 1000);
}



cerrarOperacion(id: any,grabar:any){

  if(grabar === 1){

    this.cerrarOpe(id);
    this.router.navigate(['/resultados']);
  }
  else{
    console.log("borrar");
    this.borrar(id);
    this.remover(id);
    this.router.navigate(['/resultados']);
  }

}

}
