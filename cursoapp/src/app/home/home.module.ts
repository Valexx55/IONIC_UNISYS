import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DniComponent } from '../components/dni/dni.component';
import { AlumnoComponent } from '../components/alumno/alumno.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //al crear el compoente, hay que registrarlo en un módulo
  declarations: [HomePage, DniComponent, AlumnoComponent]
})
export class HomePageModule {}
