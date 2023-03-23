import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-texto1',
  templateUrl: './hijo-texto1.component.html',
  styleUrls: ['./hijo-texto1.component.scss'],
})
export class HijoTexto1Component  implements OnInit {

  @Input() preves!:string;//PARA RX INFO DEL PADRE (PROPERTY BINDING)
  //PARA TX INFO AL PADRE 
  @Output() espalin = new EventEmitter<boolean>();//Tipo de dato que permoite el envío de datos del hijo al padre como una señal

  constructor() { }

  ngOnInit() {}

  infoPalin() {
  //voy a decirle al padre, si la preves es palíndroma
    //TODO: pasar info del hijo padre --< Output
    //si p reves espalin , le digo al padre true

    //si no, le digo al padre false
    let resultado: boolean = this.palindrome(this.preves);
    this.espalin.emit(resultado);
  }

   palindrome(str:string):boolean {
    // Paso 1. Pon en minuscula la cadena y usa el RexEXP para remover los caracteres no deseados en el.
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
    
    var lowRegStr = str.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
       
    // Paso 2. Utiliza los métodos de encadenamiento con funciones integradas.
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
     
    //  Paso 3. Revisa si reverseStr es estrictamente igual a lorRegStr y regresa un BooLean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
  }

  infoLongi() {

  }

  limpiar ()
  {
    this.preves='';//limpio el formulario del hijo
  }

}
