import { Component, OnInit } from '@angular/core';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Geolocation } from '@capacitor/geolocation';

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
  constructor(private diagnostic:Diagnostic, private locationAccuracy: LocationAccuracy ) { 
    this.ubicacion="la playa";
  }

  

  /* V1 - SIN COMPROBAR EL ESTADO DEL GPS */
  /*async ngOnInit() {

    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);

    this.ubicacion = coordinates.coords.latitude +" "+ coordinates.coords.longitude;
  }*/

  /* V2 - COMPROBANDO EL ESTADO DEL GPS Y SOLICITANDO SU ACTIVACIÓN*/
  //1º si el gps está activo - Diagnostic de CORDOVA
    // si está, pedir la ubicación
      //si no, pedir que se active el GPS - LocationAccuray - CORDOVA

  async imprimirUbicacionActual ()
  {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);

    this.ubicacion = coordinates.coords.latitude +" "+ coordinates.coords.longitude;
  } 

  ngOnInit(): void {
    this.diagnostic.isGpsLocationEnabled().then(
      (gpsactivo) => {
        if (gpsactivo)
        {
          alert ("GPS ACTIVO");
          this.imprimirUbicacionActual();
        } else {
          alert ("GPS NO ACTIVO");
          //TODO: pedir su activación
          this.locationAccuracy.canRequest().then(
            (canrequest) => {
              if (canrequest)
              {
                this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
                  (ok) => {
                    alert("UBICACIÓN OK");
                    this.imprimirUbicacionActual();
                  }, 
                  error => {
                    alert("UBICACIÓN KO");
                    this.ubicacion = "Permiso denegado";
                  }
                  
                )
              }
            }
          )
        }
      }
    )
  }
}
