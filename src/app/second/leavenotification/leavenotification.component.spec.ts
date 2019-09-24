import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavenotificationComponent } from './leavenotification.component';

describe('LeavenotificationComponent', () => {
  let component: LeavenotificationComponent;
  let fixture: ComponentFixture<LeavenotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavenotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavenotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
