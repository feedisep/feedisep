import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TicketComponent} from './ticket/ticket/ticket.component';
import {TicketFullComponent} from './ticket/ticket-full/ticket-full.component';
import {TicketMinComponent} from './ticket/ticket-min/ticket-min.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatListModule,
  MatProgressBarModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatTabsModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatGridListModule,
  MatDialogModule,
  MatInputModule,
  MatChipsModule, MatBadgeModule
} from '@angular/material';
import {FeedComponent} from './feed/feed.component';
import {FeedentryComponent} from './feed/feedentry/feedentry.component';
import {MainContentComponent} from './main-content/main-content.component';
import {TicketMinContainerComponent} from './ticket-min-container/ticket-min-container.component';
import {SideNavComponent} from './side-nav/side-nav.component';
import {MatMenuModule} from '@angular/material/';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    TicketFullComponent,
    TicketMinComponent,
    MainContentComponent,
    TicketMinComponent,
    FeedComponent,
    FeedentryComponent,
    TicketMinContainerComponent,
    SideNavComponent
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
    MatDialogModule,
    MatListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatChipsModule,
    MatBadgeModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TicketFullComponent]
})
export class AppModule {
}
