import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-dni',
  templateUrl: './dni.component.html',
  styleUrls: ['./dni.component.scss'],
})
export class DniComponent  implements OnInit, OnDestroy {

  //TODO: hacer un Componente para caclular
  //la letra asociada a un DNI

  letra!:string;
  //letra:string;
  numero:number|null;
  titulo:string;

   static readonly SECUENCIA_LETRAS_DNI:string="TRWAGMYFPDXBNJZSQVHLCKE";

  constructor() { 
    //PARA INICIALIZAR PROPIEDADES
    this.titulo='CALCULO DE LA LETRA DE SU DNI';
   // this.letra='';
    this.numero=2;
    console.log('en el constructor');
  }
  ngOnDestroy(): void {
    //PARA LIBERAR RECURSOS
    //throw new Error('Method not implemented.');
  }

  ngOnInit() {
    //CUANDO SE HA CARGADO EL HTML / LA PLANTILLA SE LLAMA A ESTE MÉTODO
    //PARECIDO AL ONLOAD
      console.log('ngOnInit()');
  }  //PARA OBTENER DATOS DE UN SERVICIO


  ionViewWillEnter()
  {
    console.log('ionViewWillEnter()');
  }

  calcularLetra()
  {
    console.log("tocó el botón");
    //TODO:hacer validación 
    if (this.numero!=null)
    {
      console.log(`VALOR INTRODUCIDO ${this.numero}`);
      let resto: number = this.numero%DniComponent.SECUENCIA_LETRAS_DNI.length;
      this.letra = DniComponent.SECUENCIA_LETRAS_DNI.charAt(resto);
    }
    //TODO: HACIENDO UNA LISTA DE DNIS CON CADA DNI INTRODUCIDO
    //REPASO DE PASOS PARA CREAR E INTEGRAR UN NUEVO COMPONENTE
    //MOSTRAR 
    //MÁXIMO
    //MÍNIMO
    //FILTRAR
    //MAP TRANSFORMAR

  }


}
