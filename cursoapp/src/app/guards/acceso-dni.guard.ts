import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'//instancia por defecto y cualquier componente puede usarlos por inyección
})
export class AccesoDniGuard /*implements CanActivate*/ {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("estamos en canActivate AccesoDniGuard");
    return false;
  }

  condicion (
    /*route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot*/): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("estamos en canActivate AccesoDniGuard");
    return false;
  }
  
}
