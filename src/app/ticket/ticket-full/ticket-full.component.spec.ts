import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFullComponent } from './ticket-full.component';

describe('TicketFullComponent', () => {
  let component: TicketFullComponent;
  let fixture: ComponentFixture<TicketFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
