import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component ({
	selector: 'mb-nav-view',
  	templateUrl: './nav.component.html',
  	styleUrls: ['./nav.component.css']
})

export class NavComponent { 
	constructor(private auth: AuthService) { }

}