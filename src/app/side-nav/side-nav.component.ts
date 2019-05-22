import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketFullComponent} from '../ticket/ticket-full/ticket-full.component';
import {TicketService} from '../ticket/ticket.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  constructor(public dialog: MatDialog, private ticketservice: TicketService) {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TicketFullComponent, {
      width: '50%',
    });
    this.ticketservice.isItFull(false);
    dialogRef.componentInstance.dialogRef = dialogRef;

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  goToMyAccount(): void {
    window.location.href = 'https://moncompte.isep.fr/' ;
  }
  disconnect(): void {
    // do something
    window.location.href = 'https://sso-portal.isep.fr/' ;
  }

}
