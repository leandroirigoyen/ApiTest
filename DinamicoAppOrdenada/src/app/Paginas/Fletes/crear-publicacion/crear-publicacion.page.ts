import { Component, OnInit } from '@angular/core';
import { FletesService } from 'src/app/Datos(servicios)/flete.service';
import { Flete } from 'src/app/Modelos/fletes.model';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.page.html',
  styleUrls: ['./crear-publicacion.page.scss'],
})
export class CrearPublicacionPage implements OnInit {

	flete: Flete = {};

  constructor(private fletesService: FletesService, private router: Router) { }

  ngOnInit() {
  }

  guardarNuevoFlete(){
	if(this.fletesService.fletes == null){
		this.fletesService.fletes = []
	}
	this.fletesService.fletes.push(this.flete);
  const key = 'fletes';
	Storage.set({key, value:JSON.stringify(this.fletesService.fletes)});
	this.router.navigate(["/fletes"]);
	
  
}

}
