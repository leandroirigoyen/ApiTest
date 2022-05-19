import { Injectable } from '@angular/core';
import { Pedido } from '../Modelos/pedido.model'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
	detalle: Pedido = {};
	pedidos: Pedido[] = [];
	pedidoborrado: Pedido[] = [];
  
	constructor() { }
  
  obtPedidos() {
	  return[...this.pedidos]
  }

  obtPedido(pedidoId: string) {
	  return{
		  ...this.pedidos.find(pedido => {
			return pedido.id === pedidoId
		})
	  }
  }


}
