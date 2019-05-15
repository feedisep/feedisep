import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket/ticket.component';
import { TicketFullComponent } from './ticket/ticket-full/ticket-full.component';
import { TicketMinComponent } from './ticket/ticket-min/ticket-min.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule, MatFormFieldModule,
  MatListModule,
  MatProgressBarModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonToggleModule,
} from '@angular/material';
import { FeedComponent } from './feed/feed.component';
import { FeedentryComponent } from './feed/feedentry/feedentry.component';
import { SearchZoneComponent } from './search-zone/search-zone.component';
import { TicketMinContainerComponent } from './ticket-min-container/ticket-min-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFullComponent,
    TicketMinComponent,
    SearchZoneComponent,
    TicketMinComponent,
    FeedComponent,
    FeedentryComponent,
    TicketMinContainerComponent
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
    MatTooltipModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
