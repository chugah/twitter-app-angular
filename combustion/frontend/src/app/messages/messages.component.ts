import { Component } from '@angular/core';
import { WebService } from '../services/mb-web.service';
import { ActivatedRoute } from '@angular/router';

@Component ({
	selector: 'mb-msg-view',
  	templateUrl: './messages.component.html',
  	styleUrls: ['./messages.component.css']
})

export class MessagesComponent { 

	constructor(
	private webService: WebService, private route: ActivatedRoute) { }

	ngOnInit() {
		var name = (this.route.snapshot.params.name);
		this.webService.getMessages(name);
	}
}