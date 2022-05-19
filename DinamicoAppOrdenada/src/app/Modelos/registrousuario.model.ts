export class RegistroUsuario {
	id?: string;
	nombre?: string;
	apellido?: string;
	mail?: string;
	movil?: string;
	password?: string;
	confirmarpassword?: string;
	
	
	constructor(){
		this.nombre = null;
		this.apellido = null;
		this.mail = null;
		this.movil = null;
		this.password = null;
		this.confirmarpassword = null;
	}
}