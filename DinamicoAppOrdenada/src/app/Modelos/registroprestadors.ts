export class RegistroPrestador {
	id?: string;
	nombre?: string;
	apellido?: string;
    cedulafrente?: string;
    ceduladetras?: string;
	mail?: string;
	movil?: string;
	password?: string;
	confirmarpassword?: string;


	constructor(){
		this.nombre = null;
		this.apellido = null;
        this.cedulafrente = null;
        this.ceduladetras = null;
		this.mail = null;
		this.movil = null;
		this.password = null;
		this.confirmarpassword = null;
	}
}
