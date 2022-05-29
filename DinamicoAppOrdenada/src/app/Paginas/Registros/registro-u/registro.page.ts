import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { RegistroUsuario } from 'src/app/Modelos/registrousuario.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

	registroUsuario: RegistroUsuario = new RegistroUsuario();


  constructor(public alertController: AlertController,
	public navCtrl: NavController,) {


  }

  ngOnInit() {
  }

  async revisarNombre(){
	  if(this.registroUsuario.nombre == null){
		const alert = await this.alertController.create({
			header: 'Datos incompletos',
			message: 'Tienes que llenar todos los datos',
			buttons: ['Aceptar']
		  });

		  await alert.present();
	  }

  }
  async revisarApellido(){
	if(this.registroUsuario.apellido == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarMail(){
	if(this.registroUsuario.mail == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarMovil(){
	if(this.registroUsuario.movil == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarPassword(){
	if(this.registroUsuario.password == null){
	  const alert = await this.alertController.create({
		  header: 'Datos incompletos',
		  message: 'Tienes que llenar todos los datos',
		  buttons: ['Aceptar']
		});

		await alert.present();
	}

}
async revisarconfirmarPassword(){
	if(this.registroUsuario.confirmarpassword !== this.registroUsuario.password){
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

    const usuario = {
      nombre: formularioRegistro.value.nombre,
	  apellido: formularioRegistro.value.apellido,
	  mail: formularioRegistro.value.mail,
	  movil: formularioRegistro.value.movil,
      password: formularioRegistro.value.password,
	  confirmacionPassword: formularioRegistro.value.confirmacionPassword
    };

	const key = 'usuario';
    Storage.set({key,value:JSON.stringify(usuario)});

	const key2 = 'ingresado';
	const value = 'true';
	Storage.set({key:key2,value});
		this.navCtrl.navigateRoot('menu/servicios');
  }

}
