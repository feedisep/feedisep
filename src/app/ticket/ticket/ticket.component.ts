import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(private matIconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon('favorite',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/favorite-icon.svg'));
    this.matIconRegistery.addSvgIcon('bookmark',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/bookmark-icon.svg'));
    this.matIconRegistery.addSvgIcon('star',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/star_rate-icon.svg'));
    this.matIconRegistery.addSvgIcon('share',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/share-icon.svg'));
  }

  ngOnInit() {
  }

}
