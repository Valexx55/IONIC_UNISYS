import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';//NECESARIO PARA COMUNICACIONES HTTP
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { Diagnostic } from '@awesome-cordova-plugins/diagnostic/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),AppRoutingModule, HttpClientModule],
  //tanto locationAcc como Diagnostic son servicios que no se instancia automáticamente
  //para toda la aplicación, luego me toca delcararlos aquí explícitamente
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  LocationAccuracy, Diagnostic],
  bootstrap: [AppComponent],
})
export class AppModule {}
