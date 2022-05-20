import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FletesService } from 'src/app/Datos(servicios)/flete.service';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { DetalleFleteComponent } from 'src/app/Componentes/detalle-flete/detalle-flete.component';

@Component({
  selector: 'app-fletes',
  templateUrl: './fletes.page.html',
  styleUrls: ['./fletes.page.scss'],
})
export class FletesPage implements OnInit {

  constructor(private router: Router, private fletesService: FletesService, private modalCtrl: ModalController,
	private alertCtrl: AlertController) { }

  ngOnInit() {
	const key = 'fletes';
	Storage.get({key}).then(fletesStorage => {
		if(fletesStorage != null) {
			this.fletesService.fletes = JSON.parse(fletesStorage.value)
		}
		
	})
  }
  async abrirdetalle(detalle) {
	this.fletesService.detalle = detalle;


	const modal = await this.modalCtrl.create({
		component: DetalleFleteComponent
	  });
	  return await modal.present();
}

AgrNuevoAviso(){
	this.router.navigate(['/fletes/crear-publicacion']);
}

async removerPedido(id){

	const alertElement = await this.alertCtrl.create({
		header: 'Eliminar pedido?',
		buttons: [
			{
				text: 'Si',
				handler: () => {
					console.log(this.fletesService.fletes[id])
					this.fletesService.fleteborrado.push({...this.fletesService.fletes[id]})
					this.fletesService.fletes.splice(id,1)
					Storage.set({key:'pedidoborrado', value:JSON.stringify(this.fletesService.fletes)})
				}
			},
			{
				text: 'No',
				role: 'cancel',
			},
			
		]
	});
	alertElement.present();


}
}
