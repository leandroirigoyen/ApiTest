import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-agregar-pedido',
  templateUrl: './agregar-pedido.page.html',
  styleUrls: ['./agregar-pedido.page.scss'],
})
export class AgregarPedidoPage implements OnInit {

  constructor(private pedidoService: PedidoService, private router: Router) { }

  ngOnInit() {
  }

  guardarNuevoPedido(fecha: HTMLInputElement, nombre: HTMLInputElement, barrio: HTMLInputElement, direccion: HTMLInputElement, telefono: HTMLInputElement, productos: HTMLInputElement, comentarios: HTMLInputElement){
	  this.pedidoService.agrPedido(fecha.value, nombre.value, barrio.value, direccion.value, telefono.value, productos.value, comentarios.value);
	  this.router.navigate(['/menu/servicios/dinamico-pedidos']);
	
  }

}
