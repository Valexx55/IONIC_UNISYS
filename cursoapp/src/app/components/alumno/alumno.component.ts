import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent  implements OnInit {

  constructor(public alumnoService:AlumnoService) { }

  ngOnInit() {

    this.alumnoService.getAlumnos();
    //TODO: ME TRAIGO LOS DATOS DEL INTERNET
    //DEL API WEB DE ALUMNOS
    //Y LOS MUESTRO
  }

}
