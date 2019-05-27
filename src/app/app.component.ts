import { Component } from '@angular/core';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {TicketService} from './ticket/ticket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public dialog: MatDialog,
              private matIconRegistery: MatIconRegistry,
              private sanitizer: DomSanitizer,
              private ticketservice: TicketService) {
    this.matIconRegistery.addSvgIcon('favorite',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/favorite-icon.svg'));
    this.matIconRegistery.addSvgIcon('menu',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/menu-icon.svg'));
  }
  opened: boolean;
  title = 'FeedISEP';

  toggleNav(nav: any) {
    if (nav.opened) {
      nav.close();
    } else {
      nav.open();
    }
  }
}

