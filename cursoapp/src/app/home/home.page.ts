import { Component } from '@angular/core';
import { App } from '@capacitor/app';
import { AlertController, Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  suscriptor_hacia_atras!: Subscription;

  constructor(private platform:Platform, private alertController: AlertController) {
    console.log("En el constructor de HomePage-Component");
  }

  ionViewDidEnter()
  {
    //me suscribo al botón hacia atrás físico
    console.log('ionViewDidEnter');
    
    this.suscriptor_hacia_atras = this.platform.backButton.subscribe(() => {
      //console.log("TOCADO EL BOTÓN HACIA ATRÁS");
      //alert("SALIENDO");
      //App.exitApp();//con esta instrucción salgo
      this.presentAlert();
      
    });
  }

  ionViewWillLeave ()
  {
    //me desuscribo al botón hacia atrás físico
    console.log('ionViewWillLeave');
    alert("SALIENDO DEL COMPONENTE");
    this.suscriptor_hacia_atras.unsubscribe();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Estás seguro que quieres salir?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            //this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            //this.handlerMessage = 'Alert confirmed';
            App.exitApp();
          },
        },
      ],
    });

    await alert.present();

    //await alert.onDidDismiss();

    /*const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;*/
  }
}
