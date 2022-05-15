import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { PedidoService } from '../pedido.service';
import { AlertController } from '@ionic/angular';
import { Pedido } from '../pedido.model';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.page.html',
  styleUrls: ['./detalle-pedido.page.scss'],
})
export class DetallePedidoPage implements OnInit {

	pedido: Pedido;

  constructor(private activatedRoute: ActivatedRoute, private pedidoService: PedidoService,
	private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
	this.activatedRoute.paramMap.subscribe(paramMap => {
		if (!paramMap.has("dinamico-pedidosId")){
		// redirect
		this.router.navigate(['/menu/servicios/dinamico-pedidos']);
		}
		const recipeId = paramMap.get('dinamico-pedidosId')
		this.pedido = this.pedidoService.obtPedido(recipeId);
	});
  }

  async removerPedido(){

	const alertElement = await this.alertCtrl.create({
		header: 'Eliminar pedido?',
		buttons: [
			{
				text: 'Si',
				handler: () => {
					this.pedidoService.removerPedido(this.pedido.id);
					this.router.navigate(['/menu/servicios/dinamico-pedidos'])
				}
			},
			{
				text: 'No',
				role: 'cancel',
			},
			
		]
	});


	await alertElement.present();


	 
	  
  }

}
