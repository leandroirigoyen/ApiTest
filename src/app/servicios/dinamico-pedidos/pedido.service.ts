import { Injectable } from '@angular/core';
import { Pedido } from '../dinamico-pedidos/pedido.model'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
	private pedidos: Pedido[] = []
  
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

  agrPedido(fecha: string, nombre: string, barrio: string, direccion: string, telefono: string, productos: string, comentarios: string,) {
	  this.pedidos.push({
		  fecha,
		  nombre,
		  barrio,
		  direccion,
		  telefono,
		  productos,
		  comentarios,
		  id: this.pedidos.length + 1 + ""
	  });
  }

  removerPedido(pedidoId: string) {
	this.pedidos = this.pedidos.filter(pedido => {
		return pedido.id !== pedidoId
	})
  }
}
