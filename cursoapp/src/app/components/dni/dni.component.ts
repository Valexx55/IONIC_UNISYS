import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

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
  lista_dnis:Array<Number>;
  lista_result:Array<Number>;

   static readonly SECUENCIA_LETRAS_DNI:string="TRWAGMYFPDXBNJZSQVHLCKE";

  suscriptor_hacia_atras!: Subscription;

  constructor(private platform:Platform, private router:Router) { 
    //PARA INICIALIZAR PROPIEDADES
    this.titulo='CALCULO DE LA LETRA DE SU DNI';
   // this.letra='';
    this.numero=2;
    console.log('en el constructor');
    this.lista_dnis = new Array<Number>();
    this.lista_result = new Array<Number>();
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

  ionViewDidEnter()
  {
    //me suscribo al botón hacia atrás físico
    console.log('ionViewDidEnter');
    this.suscriptor_hacia_atras = this.platform.backButton.subscribe(() => {
      //console.log("TOCADO EL BOTÓN HACIA ATRÁS");
      //alert("BOTON HACIA ATRÁS TOCADO " + window.location.href);
      this.router.navigateByUrl('/home');
      
    });
  }

  ionViewWillLeave ()
  {
    //me desuscribo al botón hacia atrás físico
    console.log('ionViewWillLeave');
    alert("SALIENDO DEL COMPONENTE");
    this.suscriptor_hacia_atras.unsubscribe();
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
      this.lista_dnis.push(this.numero);
      //mostrar
      this.lista_dnis.forEach(itemdni => {console.log(itemdni);});
      //vamos a filtrar sólo los dnis mayores que 10
      //this.lista_dnis.filter
      this.lista_result = this.lista_dnis.filter(dni => dni > 10);
      //this.lista_dnis.sort();//ordena ASCII
      this.lista_dnis.sort(
        (a:Number, b:Number):number => {
          //paso de Number a number para que me deje restar
          let an: number = <number>a;//2 formas alternativas
          let bn: number = b as number;//de casting
          let resultado:number = an-bn;
          return resultado;
          //  return (a-b);
        }
      );
    }
    //FILTER, FOREACH, MAP

  }


}
