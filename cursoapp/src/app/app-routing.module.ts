import { inject, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Platform } from '@ionic/angular';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { DniComponent } from './components/dni/dni.component';
import { GpsComponent } from './components/gps/gps.component';
import { AccesoDniGuard } from './guards/acceso-dni.guard';
import { GpsGuard } from './guards/gps.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dni',//"url"
    component: DniComponent, 
   // canActivate: [AccesoDniGuard]
   //canActivate: [() => false]//rutas funcionales como guardias mejora de la 14.2
   canActivate: [()=> inject(AccesoDniGuard).condicion()]//"INEJECT - Autowired- spring"
  },
  {
    path: 'alumno',//"url"
    component: AlumnoComponent
  },
  {
    path: 'gps',//"url"
    component: GpsComponent,
    canActivate: [()=> inject(GpsGuard).canActivate()]//"INEJECT - Autowired- spring"
    //canActivate: [()=> inject(Platform).is("android")]//"INEJECT - Autowired- spring"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
