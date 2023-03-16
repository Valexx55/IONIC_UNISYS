import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { Observer } from 'rxjs';
import { Alumno } from 'src/app/model/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  lista_alumno_rx!:Array<Alumno>;

  observerGetAlumnos : Observer<Array<Alumno>> = {
    next: (lista_alumnos:Array<Alumno>)=> {
      
      this.lista_alumno_rx = lista_alumnos;
      console.log(`Hemos rx ${lista_alumnos.length} alumnos`);
      console.log(`ANtes del filtro`);
      lista_alumnos.forEach(alumno => console.log(alumno));
      lista_alumnos =  lista_alumnos.filter(alumno => alumno.edad<30);
      console.log(`DESPUÉs del filtro`);
      lista_alumnos.forEach(alumno => console.log(alumno));
    },
    error: err => console.error('Observer got an error: ' + err),
    complete: () => {
      console.log('Observer got a complete notification');
      if (this.loading)//si ya se creo la notificación de espera
        {
          this.loading.dismiss();//ocultala
        }
    }
  };

  loading!:HTMLIonLoadingElement;//operador ! evito inicializarlo en el constructor

  constructor(public alumnoService:AlumnoService, private toastController: ToastController, private loadingCtrl: LoadingController) { }

  
  async mostrarCargando ()
  {
    this.loading = await this.loadingCtrl.create({
      message: 'Esperando...'
    });

    this.loading.present();
    
  
  }

   ngOnInit() {

    //JSON.stringify
    console.log("ngOnInit1()");

    
    this.mostrarCargando ();
  
  
    this.alumnoService.getAlumnos().subscribe(this.observerGetAlumnos);
    //sintaxis más común comentada
   /* this.alumnoService.getAlumnos().subscribe({
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    });*/
   // this.presentToast('middle');
    console.log("ngOnInit2()");
    //TODO: ME TRAIGO LOS DATOS DEL INTERNET
    //DEL API WEB DE ALUMNOS
    //Y LOS MUESTRO
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    console.log("presentToast1()");
    const toast = await this.toastController.create({
      message: 'HOLA ALUMNNOSSSSS :)!',
      duration: 3000,
      position: position
    });
    console.log("presentToast2()");

    await toast.present();
    console.log("presentToast3()");
  }

}
