import {Component, Input, OnInit} from '@angular/core';
import {Feedentry} from '../../Feedentry';

@Component({
  selector: 'app-feedentry',
  templateUrl: './feedentry.component.html',
  styleUrls: ['./feedentry.component.css']
})
export class FeedentryComponent implements OnInit {

  @Input() feedEntry: Feedentry;

  constructor(public entry: Feedentry) {
    this.feedEntry = entry;
  }

  ngOnInit() {
  }

}
