import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../model/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
//desde aquí, es ddonde comunicamos por HTTP
//con un servidor

  static readonly RUTA_SERVIDOR: string = "https://my-json-server.typicode.com/valexx55/angularesjson/alumno";

  constructor(private http:HttpClient) { }

  getAlumnos ():Observable<Array<Alumno>>
  {
   return this.http.get<Array<Alumno>>(AlumnoService.RUTA_SERVIDOR);
  }

  }
