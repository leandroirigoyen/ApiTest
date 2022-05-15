import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

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
		  titulo: 'Mensajes',
		  url: '/menu/entradas',
		  icono: 'mail'
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
			  localStorage.removeItem('ingresado');
			  this.navCtrl.navigateRoot('login');
			}
		  },
        {
          text: 'No',
          handler: () => {
            
          }
        }, 
      ]
    });

    await alert.present();
  }

}
