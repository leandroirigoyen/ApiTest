import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-dinamico-pedidos',
  templateUrl: './dinamico-pedidos.page.html',
  styleUrls: ['./dinamico-pedidos.page.scss'],
})
export class DinamicoPedidosPage implements OnInit {

	pedidos = []

  constructor(private router: Router,
	private pedidosService: PedidoService) { }

  ngOnInit() {
	this.pedidos = this.pedidosService.obtPedidos()
}

ionViewWillEnter(){
	this.pedidos = this.pedidosService.obtPedidos();
}

AgrNuevoPedido(){
	this.router.navigate(['/nuevo-pedido']);
}



}
