import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/Datos(servicios)/pedido.service';
import { CallNumber } from "@ionic-native/call-number/ngx";
import { AlertController, ModalController } from '@ionic/angular';
import { DetallePedidoComponent } from 'src/app/Componentes/detalle-pedido/detalle-pedido.component';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-dinamico-pedidos',
  templateUrl: './dinamico-pedidos.page.html',
  styleUrls: ['./dinamico-pedidos.page.scss'],
})
export class DinamicoPedidosPage implements OnInit {

  constructor(private router: Router,
	private pedidosService: PedidoService,
	private callNumber: CallNumber,
	public modalCtrl: ModalController,
	private alertCtrl: AlertController,) { 
		
	}

  ngOnInit() {
const key = 'pedidos';
	Storage.get({key}).then(pedidosStorage => {
		if(pedidosStorage != null) {
			this.pedidosService.pedidos = JSON.parse(pedidosStorage.value)
		}
		
	})
}

AgrNuevoPedido(){
	this.router.navigate(['/menu/servicios/dinamico-pedidos/agregar-pedido']);
}

async abrirdetalle(detalle) {
	this.pedidosService.detalle = detalle;


	const modal = await this.modalCtrl.create({
		component: DetallePedidoComponent
	  });
	  return await modal.present();
}

launchDialer(numero){
	this.callNumber.callNumber(numero,true)
	.then(() => console.log('Launched dialer!'))
	.catch(() => console.log('Error launching dialer'));
}
async removerPedido(id){

	const alertElement = await this.alertCtrl.create({
		header: 'Eliminar pedido?',
		buttons: [
			{
				text: 'Si',
				handler: () => {
					console.log(this.pedidosService.pedidos[id])
					this.pedidosService.pedidoborrado.push({...this.pedidosService.pedidos[id]})
					this.pedidosService.pedidos.splice(id,1)
					Storage.set({key:'pedidoborrado', value:JSON.stringify(this.pedidosService.pedidos)})
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
openMaps(place) {
	console.log(place);
	const url = place.direccion.includes("https://") ? place.direccion : 'https://www.google.com/maps/dir/?api=1&destination=' + place.direccion;
window.open(url, '_blank')
}
}