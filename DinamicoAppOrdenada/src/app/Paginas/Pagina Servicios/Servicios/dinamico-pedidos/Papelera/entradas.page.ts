import { Component, OnInit } from '@angular/core';
import { PedidoService } from 'src/app/Datos(servicios)/pedido.service';
import { Storage } from '@capacitor/storage';
import { Pedido } from 'src/app/Modelos/pedido.model'

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
	
  constructor(private pedidosService: PedidoService) { 
  }

  ngOnInit() {
	const key = 'pedidos';
	Storage.get({key}).then(pedidosStorage => {
		if(pedidosStorage != null) {
			this.pedidosService.pedidos = JSON.parse(pedidosStorage.value);
			console.log(this.pedidosService);
			console.log(this.pedidosService.pedidoborrado[0]);
		}
		
	})
  }
  

}