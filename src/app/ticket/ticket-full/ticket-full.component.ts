import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Ticket} from '../../Ticket';
import {TicketService} from '../ticket.service';


@Component({
  selector: 'app-ticket-full',
  templateUrl: './ticket-full.component.html',
  styleUrls: ['./ticket-full.component.css']
})
export class TicketFullComponent implements OnInit {
  displayTicket = false;
  id = 0;
  constructor(
    public dialogRef: MatDialogRef<TicketFullComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket,
    private ticketservice: TicketService) {}

  ngOnInit() {
    this.ticketservice.currentMessage.subscribe(isFull => this.displayTicket = isFull);
    this.ticketservice.currentMessage.subscribe(ticketID => this.id = ticketID);
  }

  antiClick(event) {
    event.stopPropagation();
  }
}
