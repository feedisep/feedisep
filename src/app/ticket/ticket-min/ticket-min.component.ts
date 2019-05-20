import { Component, OnInit } from '@angular/core';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Ticket} from '../../Ticket';
import {TicketFullComponent} from "../ticket-full/ticket-full.component";

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
  constructor(public dialog: MatDialog, private matIconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('comment',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/comment-icon.svg'));
    this.matIconRegistry.addSvgIcon('chat',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/chat-icon.svg'));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TicketFullComponent, {
      width: '50%',
    });
    dialogRef.componentInstance.dialogRef = dialogRef;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  antiClick(event) {
    event.stopPropagation();
  }

  ngOnInit() {   }

}
