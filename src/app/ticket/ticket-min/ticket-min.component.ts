import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Ticket} from '../../Ticket';

@Component({
  selector: 'app-ticket-min',
  templateUrl: './ticket-min.component.html',
  styleUrls: ['./ticket-min.component.css']
})
export class TicketMinComponent implements OnInit {

  // @ts-ignore
  ticket: Ticket = {
    id: 1,
    title: 'Test1'
  };
  constructor(private matIconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon('comment',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/comment-icon.svg'));
    this.matIconRegistery.addSvgIcon('chat',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/chat-icon.svg'));
  }

  ngOnInit() {   }

}
