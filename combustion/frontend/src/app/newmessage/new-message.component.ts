import { Component } from '@angular/core';
import { WebService } from '../services/mb-web.service';

@Component ({
	selector: 'mb-new-msg',
  	templateUrl: './new-message.component.html',
  	styleUrls: ['./new-message.component.css']
})

export class NewMessageComponent { 

	constructor(private webService: WebService) { }	

	message = {
		owner: "",
		text: ""
	}

	post() {
		this.webService.postMessage(this.message);
	}
}