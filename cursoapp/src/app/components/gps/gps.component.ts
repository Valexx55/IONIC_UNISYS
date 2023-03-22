import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gps',
  templateUrl: './gps.component.html',
  styleUrls: ['./gps.component.scss'],
})
export class GpsComponent  implements OnInit {

  //TODO: VAMOS A PONER UNA GUARDIA, PARA QUE SÓLO
  //DSESDE EL MOVIL ANDROID, PUEDA ACCEDERSE A ESTE
  //COMPONENTE 

  ubicacion:string;

  //TODO: ACCEDER AL GPS DEL MOVIL USANDO API NATIVA
  //capacitor - gratis
  //capacitor - awesome - cordova
  constructor() { 
    this.ubicacion="la playa";
  }

  ngOnInit() {}

}
