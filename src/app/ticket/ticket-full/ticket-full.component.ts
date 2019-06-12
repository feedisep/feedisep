import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Ticket} from '../../Ticket';
import {TicketService} from '../ticket.service';
import {FormControl} from '@angular/forms';



@Component({
  selector: 'app-ticket-full',
  templateUrl: './ticket-full.component.html',
  styleUrls: ['./ticket-full.component.css']
})
export class TicketFullComponent implements OnInit {

  // @ts-ignore
  ticket3: Ticket = {
    id: 3,
    title: 'Test2',
    state: 'Taken',
    content: 'Description of the problem Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    // content est bloqué à 140 caractères
    upvote: 3,
    serial: 'NDCTEST3',
    displayTicket: true,
    campus: 'NDC',
  };
  displayTicket = false;
  id = 0;
  updatable = false;
  tags = new FormControl();
  tagList: string[] = ['Microwave', 'Coffee dispenser', 'Microphone', 'Speakers', 'Light', 'Computer', 'Door'];
 campus = 'NDC';

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

  onToggleChange(e: Event) {
    if (this.campus === 'NDC') {
      this.campus = 'NDL';
    } else {
      this.campus = 'NDC';
    }
  }
  updateTicket() {
    this.updatable = true;
  }
  closeWindow() {
    this.dialogRef.close();
  }
}
