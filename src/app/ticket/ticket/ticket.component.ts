import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatDialog, MatIconRegistry} from '@angular/material';
import {TicketFullComponent} from "../ticket-full/ticket-full.component";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor(public dialog: MatDialog, private matIconRegistery: MatIconRegistry, private sanitizer: DomSanitizer) {
    this.matIconRegistery.addSvgIcon('favorite',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/favorite-icon.svg'));
    this.matIconRegistery.addSvgIcon('bookmark',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/bookmark-icon.svg'));
    this.matIconRegistery.addSvgIcon('star',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/star_rate-icon.svg'));
    this.matIconRegistery.addSvgIcon('share',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/icons/share-icon.svg'));
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

  ngOnInit() {
  }

}
