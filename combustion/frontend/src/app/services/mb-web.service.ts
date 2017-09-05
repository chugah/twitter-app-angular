import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class WebService {
	BASE_URL = 'http://localhost:63145/api';
	private messageStore = [];

	private messageSubject = new Subject();

	messages = this.messageSubject.asObservable();

	constructor(private http: Http) { 
		this.getMessages(this.messages);
	}
	
	getMessages(user) {
		user = (user) ? '/' + user : '';
		this.http.get(this.BASE_URL + '/messages' + user)
			.subscribe(response => {
				this.messageStore = response.json();
				this.messageSubject.next(this.messageStore);
			}, error => {
				this.handleError("Unable to get messages");
			});		
	}

	async postMessage(message) {
        try {
            var response = await this.http.post(this.BASE_URL + '/messages', message).toPromise();
            this.messageStore.push(response.json());
            this.messageSubject.next(this.messageStore);
        } catch (error) {
            this.handleError("Unable to post message");
        }

    }

	private handleError(error) {
		console.error(error);
	}
}

