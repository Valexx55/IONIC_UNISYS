import { Component, OnInit, ViewChild } from '@angular/core';
import { HijoTexto1Component } from '../hijo-texto1/hijo-texto1.component';

@Component({
  selector: 'app-padre-texto',
  templateUrl: './padre-texto.component.html',
  styleUrls: ['./padre-texto.component.scss'],
})
export class PadreTextoComponent  implements OnInit {

  palabra!:string;
  palabra_reves!:string;
  @ViewChild(HijoTexto1Component) hijo1!:HijoTexto1Component; 

  constructor() {
    this.palabra = '';
    this.palabra_reves='';
   }

  ngOnInit() {}

  daLaVuelta()
  {
    console.log("da la vuelta");
    this.palabra_reves = this.invertirCadena(this.palabra);

  }

  invertirCadena(cad:string):string {
    // Paso 1. Crear una cadena vacía que almacenará la nueva cadena creada
    var nuevaCadena = "";
 
    // Paso 2. Crear el bucle FOR
    /* El punto de partida del bucle será (cad.length - 1) que corresponde al último caracter de la cadena, "a"
       Mientras i sea mayor que o igual a 0, el bucle se ejecutará
       Decrementamos i después de cada iteración */
    for (var i = cad.length - 1; i >= 0; i--) { 
        nuevaCadena += cad[i]; // o nuevaCadena = nuevaCadena + cad[i];
    }
    /* Aquí la longitud de hola es igual a 4
        Por cada iteración: i = cad.length - 1 y nuevaCadena = nuevaCadena + cad[i]
       Primera iteración:   i = 4 - 1 = 3, nuevaCadena = "" + "a" = "a"
       Segunda iteración:   i = 3 - 1 = 2, nuevaCadena = "a" + "l" = "al"
       Tercera iteración:   i = 2 - 1 = 1, nuevaCadena = "al" + "o" = "alo"
       Cuarta iteración:   i = 1 - 1 = 0,  nuevaCadena = "alo" + "h" = "aloh"
    Fin del bucle FOR*/
 
    // Paso 3. Devolver la cadena invertida
    return nuevaCadena; // "aloh"
}

  limpiarTodo() {
    console.log("limpiar todo");
    this.hijo1.limpiar();
  }

  informarPalin(palin:boolean)
  {
    alert(palin);

  }
}
