import {Component, NgModule, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {TicketMinComponent} from '../ticket/ticket-min/ticket-min.component';
 // import {BrowserModule} from "@angular/platform-browser";

@Component({
  selector: 'app-ticket-min-container',
  templateUrl: './ticket-min-container.component.html',
  styleUrls: ['./ticket-min-container.component.css']
})
/*
@NgModule({
  imports : [BrowserModule],
  declarations : [TicketMinComponent]
})
*/

export class TicketMinContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
