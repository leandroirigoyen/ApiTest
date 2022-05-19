import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';


@Injectable({
  providedIn: 'root'
})
export class NoIngresadoGuard implements CanActivate {

	constructor(public navCtrl: NavController){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		
		return Storage.get({key:'ingresado'}).then(data => {
			console.log(data)
			if (!data.value)  return true;
		this.navCtrl.navigateRoot('menu/servicios');
			return false;
		})
  }

}
