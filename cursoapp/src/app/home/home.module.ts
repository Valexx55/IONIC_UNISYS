import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DniComponent } from '../components/dni/dni.component';
import { AlumnoComponent } from '../components/alumno/alumno.component';
import { GpsComponent } from '../components/gps/gps.component';
import { HijoTexto1Component } from '../components/hijo-texto1/hijo-texto1.component';
import { HijoTexto2Component } from '../components/hijo-texto2/hijo-texto2.component';
import { PadreTextoComponent } from '../components/padre-texto/padre-texto.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //al crear el compoente, hay que registrarlo en un módulo
  declarations: [HomePage, DniComponent, AlumnoComponent, GpsComponent, HijoTexto1Component, HijoTexto2Component, PadreTextoComponent]
})
export class HomePageModule {}
