import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMinContainerComponent } from './ticket-min-container.component';

describe('TicketMinContainerComponent', () => {
  let component: TicketMinContainerComponent;
  let fixture: ComponentFixture<TicketMinContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMinContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
