import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController,} from '@ionic/angular';
import { PedidoService } from 'src/app/Datos(servicios)/pedido.service';
import { NgForm } from '@angular/forms';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-detalle-pedido',
  templateUrl: './detalle-pedido.component.html',
  styleUrls: ['./detalle-pedido.component.scss'],
})
export class DetallePedidoComponent implements OnInit {
	isEditing=false;

  constructor(public modalCtrl: ModalController, private pedidoService: PedidoService,
	private alertCtrl: AlertController,) { }

  ngOnInit() {}

  cerrardetalle(){
	this.modalCtrl.dismiss({
		dismissed: true
	  });
  }
  editarContenido(){
	  if(this.isEditing===false){
		
	  }
  }

  onEdit() {
	  this.isEditing = true;
  }

  async guardarEdit(editingForm: NgForm){

	console.log()
    if(editingForm.valid){
		const alertElement = await this.alertCtrl.create({
			header: 'Editar Pedido?',
			buttons: [
				{
					text: 'Si',
					handler: () => {
						Storage.set({key:'pedidos', value:JSON.stringify(this.pedidoService.pedidos)})
						this.modalCtrl.dismiss()
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
}