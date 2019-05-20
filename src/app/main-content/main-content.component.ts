import { Component, OnInit } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Ticket} from '../Ticket';

export interface User {
  name: string;
}

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

export class AutocompleteDisplayExample implements OnInit {
  myControl = new FormControl();
  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
