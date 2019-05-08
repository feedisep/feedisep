import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket/ticket.component';
import { TicketFullComponent } from './ticket/ticket-full/ticket-full.component';
import { TicketMinComponent } from './ticket/ticket-min/ticket-min.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatProgressBarModule, MatRippleModule, MatToolbarModule, MatTooltipModule} from '@angular/material';
import { SearchZoneComponent } from './search-zone/search-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFullComponent,
    TicketMinComponent,
    SearchZoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatIconModule,
    HttpClientModule,
    MatToolbarModule,
    MatRippleModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
