import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ContenidoHomeService } from 'src/app/servicio/contenido-home.service';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent  implements OnInit {

  public titulo: string;
  public logo: string;


  constructor(private contenbasico: ContenidoHomeService) {

    this.titulo = this.contenbasico.contenidoHome[0].titulo[0].titulo;
    this.logo = this.contenbasico.contenidoHome[0].contenido[0].logo;
  }

  ngOnInit() {

  }

}
