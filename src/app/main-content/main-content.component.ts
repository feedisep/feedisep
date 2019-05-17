import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Ticket} from '../Ticket';

@Component({
  selector: 'app-search-zone',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  // @ts-ignore
  /*
  TO DO CRéER LA LISTE
  ticketslist: Ticket = {
    title: 'Test1',
    id: 1
  };
  */
  constructor(private matIconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon('search',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/search-icon.svg'));
  }

  ngOnInit() {
  }

}
