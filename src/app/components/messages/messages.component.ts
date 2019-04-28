import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';


@Component({
  selector: 'toh-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

}
