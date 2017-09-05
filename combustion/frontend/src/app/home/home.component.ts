import { Component } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { NewMessageComponent } from '../newmessage/new-message.component';
import { NavComponent } from '../navbar/nav.component';


@Component({
  selector: 'mb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  title = 'Message Board';
}