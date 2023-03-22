import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GpsGuard /*implements CanActivate*/ {

  constructor (private platform:Platform)
  {

  }
  canActivate():boolean{
    let es_android:boolean = false;
    
      es_android =this.platform.is('android');
      console.log(`ESTAMOS EN ANDROID = ${es_android}`);

    return es_android;
  }
  
}
