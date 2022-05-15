import { Component, OnInit } from '@angular/core';
import { UserService } from './photos.service';

@Component({
  selector: 'app-respuestaserver',
  templateUrl: './respuestaserver.page.html',
  styleUrls: ['./respuestaserver.page.scss'],
})
export class RespuestaserverPage implements OnInit {

	users = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.userService.getUsers()
  		.subscribe(data => {
	  		this.users = data;
  		})
	}

	
}