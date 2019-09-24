import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingdetailsComponent } from './hearingdetails.component';

describe('HearingdetailsComponent', () => {
  let component: HearingdetailsComponent;
  let fixture: ComponentFixture<HearingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
