import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  // @ts-ignore
  private messageSource = new BehaviorSubject<boolean>();
  currentMessage = this.messageSource.asObservable();
  constructor() {}
  isItFull(isFull: boolean) {
    this.messageSource.next(isFull);
  }
}
