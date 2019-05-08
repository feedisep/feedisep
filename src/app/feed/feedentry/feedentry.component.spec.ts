import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedentryComponent } from './feedentry.component';

describe('FeedentryComponent', () => {
  let component: FeedentryComponent;
  let fixture: ComponentFixture<FeedentryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedentryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
