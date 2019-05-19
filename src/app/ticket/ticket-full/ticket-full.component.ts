import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Ticket} from '../../Ticket';

@Component({
  selector: 'app-ticket-full',
  templateUrl: './ticket-full.component.html',
  styleUrls: ['./ticket-full.component.css']
})
export class TicketFullComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TicketFullComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Ticket) {}

  ngOnInit() {
  }

}
