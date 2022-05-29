import { Component, OnInit } from '@angular/core';
import { RegistroPrestador } from 'src/app/Modelos/registroprestadors';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro-ps',
  templateUrl: './registro-ps.page.html',
  styleUrls: ['./registro-ps.page.scss'],
})
export class RegistroPsPage implements OnInit {

  registroPrestador: RegistroPrestador = new RegistroPrestador();

	constructor(
		public alertController: AlertController,
		public navCtrl: NavController) {

	  }

  ngOnInit() {
  }

  async revisarNombre(){
	  if(this.registroPrestador.nombre == null){
		const alert = await this.alertController.create({
			header: 'Datos incompletos',
			message: 'Tienes que llenar todos los datos',
			buttons: ['Aceptar']
		  });

		  await alert.present();
	  }

  }
  async revisarApellido(){
	if(this.registroPrestador.apellido == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarMail(){
	if(this.registroPrestador.mail == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarMovil(){
	if(this.registroPrestador.movil == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarPassword(){
	if(this.registroPrestador.password == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarconfirmarPassword(){
	if(this.registroPrestador.confirmarpassword !== this.registroPrestador.password){
	  const alert = await this.alertController.create({
		  header: 'Confirmar contraseña',
		  message: 'Las contraseñas no coinciden',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async guardar(formularioRegistro: NgForm){

	console.log(formularioRegistro);
    if(formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    const prestador = {
      nombre: formularioRegistro.value.nombre,
	  apellido: formularioRegistro.value.apellido,
    cedulafrente: formularioRegistro.value.cedulafrente,
    ceduladetras: formularioRegistro.value.ceduladetras,
	  mail: formularioRegistro.value.mail,
	  movil: formularioRegistro.value.movil,
      password: formularioRegistro.value.password,
	  confirmacionPassword: formularioRegistro.value.confirmacionPassword
    };

	const key = 'prestador';
    Storage.set({key,value:JSON.stringify(prestador)});

	const key2 = 'ingresado';
	const value = 'true';
	Storage.set({key:key2,value});
		this.navCtrl.navigateRoot('menu/servicios');
  }

}
