import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component ({
	selector: 'mb-login',
  	templateUrl: './login.component.html',
  	styleUrls: ['./login.component.css']
})

export class LoginComponent { 
	constructor(private auth: AuthService) { }

	loginData = {
		email: '',
		password: ''
	}

	login() {
		this.auth.login(this.loginData);
	}

}