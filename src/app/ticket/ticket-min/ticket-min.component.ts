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
    title: 'Test1',
    state: 'new'
  };
  comments: number = null;
  constructor(private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('comment',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/comment-icon.svg'));
    this.matIconRegistry.addSvgIcon('chat',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/chat-icon.svg'));
  }

  ngOnInit() {   }

}
