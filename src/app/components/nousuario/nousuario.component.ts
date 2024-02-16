import { Component, OnInit,NO_ERRORS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nousuario',
  templateUrl: './nousuario.component.html',
  styleUrls: ['./nousuario.component.scss'],
})
export class NousuarioComponent  implements OnInit {

  public imageCard: string = "";

  constructor(private router: Router) {



   }

  ngOnInit() {

    this.imageCard  = "../../../assets/imagenes/no-user.png";
  }


  ir = () =>{
    this.router.navigate(['/activacion'])
  }


}
