import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMinComponent } from './ticket-min.component';

describe('TicketMinComponent', () => {
  let component: TicketMinComponent;
  let fixture: ComponentFixture<TicketMinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
