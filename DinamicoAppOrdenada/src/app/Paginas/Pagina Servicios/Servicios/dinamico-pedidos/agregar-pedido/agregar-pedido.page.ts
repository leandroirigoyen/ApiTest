import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/Modelos/pedido.model';
import { PedidoService } from 'src/app/Datos(servicios)/pedido.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.page.html',
  styleUrls: ['./agregar-pedido.page.scss'],
})
export class AgregarPedidoPage implements OnInit {

	pedido: Pedido = {};

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
  }

  guardarNuevoPedido(){
	  //this.pedidoService.agrPedido(fecha.value, nombre.value, barrio.value, direccion.value, telefono.value, productos.value, comentarios.value);
	  if(this.pedidoService.pedidos == null){
		  this.pedidoService.pedidos = []
	  }
	  this.pedidoService.pedidos.push(this.pedido);
	const key = 'pedidos';
	  Storage.set({key, value:JSON.stringify(this.pedidoService.pedidos)});
	  this.router.navigate(["/menu/servicios/dinamico-pedidos"]);
	  
	
  }

}
