import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { DerechosService } from 'src/app/servicio/derechos.service';

@Component({
  selector: 'app-derechos',
  templateUrl: './derechos.page.html',
  styleUrls: ['./derechos.page.scss'],
})
export class DerechosPage implements OnInit {

  public data: any;

  constructor(private derechos: DerechosService) { }

  ngOnInit() {
    this.data = this.derechos.derechos[0]['es'];
  }

}
