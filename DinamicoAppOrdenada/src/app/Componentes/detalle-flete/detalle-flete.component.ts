import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { FletesService } from 'src/app/Datos(servicios)/flete.service';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-detalle-flete',
  templateUrl: './detalle-flete.component.html',
  styleUrls: ['./detalle-flete.component.scss'],
})
export class DetalleFleteComponent implements OnInit {

	isEditing=false;

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController,
	private fletesService: FletesService) { }

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
			header: 'Editar aviso?',
			buttons: [
				{
					text: 'Si',
					handler: () => {
						Storage.set({key:'fletes', value:JSON.stringify(this.fletesService.fletes)})
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

async removerPedido(id){

	const alertElement = await this.alertCtrl.create({
		header: 'Eliminar pedido?',
		buttons: [
			{
				text: 'Si',
				handler: () => {
					console.log(this.fletesService.fletes[id])
					this.fletesService.fleteborrado.push({...this.fletesService.fletes[id]})
					this.fletesService.fletes.splice(id,1)
					Storage.set({key:'pedidoborrado', value:JSON.stringify(this.fletesService.fletes)})
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
