import { Component, OnInit } from '@angular/core';
import {
	FormGroup,
	FormControl,
	Validators,
	FormBuilder
  } from '@angular/forms';
  import { AlertController, NavController } from '@ionic/angular';
  import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-registro-ps',
  templateUrl: './registro-ps.page.html',
  styleUrls: ['./registro-ps.page.scss'],
})
export class RegistroPsPage implements OnInit {
	formularioRegistro: FormGroup;

	constructor(public fb: FormBuilder,
		public alertController: AlertController,
		public navCtrl: NavController,) {
		
	  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
	  apellido: f.apellido,
	  mail: f.mail,
	  movil: f.movil,
      password: f.password,
	  cedulafrente: f.cedulafrente,
	  ceduladorso: f.ceduladorso
    }


	const key = 'usuario';
    Storage.set({key,value:JSON.stringify(usuario)});

	const key2 = 'ingresado';
	const value = 'true';
	//Storage.set({key2, value});
		this.navCtrl.navigateRoot('menu/servicios');
  }

}
