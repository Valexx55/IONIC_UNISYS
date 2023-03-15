import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//nombre de la etiqueta
  templateUrl: 'app.component.html',//PLANTILLA - HTML ASOCIADO
  styleUrls: ['app.component.scss'],//estilo DEL C
})
export class AppComponent {
  constructor() {
    console.log("En el constructor de AppComponent");
  }
}
