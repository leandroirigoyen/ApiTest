import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

	indiceSeleccionado: number = 0;

	paginas = [
		{
		  titulo: 'Inicio',
		  url: '/menu/servicios',
		  icono: 'home'
		},
		{
		  titulo: 'Papelera',
		  url: '/menu/entradas',
		  icono: 'trash'
		}
	  ]

  constructor(private alertController: AlertController,
	private navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      header: 'Salir',
      message: '¿Cerrar sesión?',
      buttons: [
		{
			text: 'Si',
			handler: () => {
			  Storage.remove({key:'ingresado'});
			  this.navCtrl.navigateRoot('login');
			}
		  },
        {
          text: 'No',
        }, 
      ]
    });

    await alert.present();
  }

}
