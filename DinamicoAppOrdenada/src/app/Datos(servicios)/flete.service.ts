import { Injectable } from '@angular/core';
import { Flete } from '../Modelos/fletes.model'

@Injectable({
  providedIn: 'root'
})
export class FletesService {
	detalle: Flete = {};
	fletes: Flete[] = [];
	fleteborrado: Flete[] = [];
  
	constructor() { }
  
  obtFletes() {
	  return[...this.fletes]
  }

  obtFlete(fleteId: string) {
	  return{
		  ...this.fletes.find(pedido => {
			return pedido.id === fleteId
		})
	  }
  }


}
