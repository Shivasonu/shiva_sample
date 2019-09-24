import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingdatesComponent } from './hearingdates.component';

describe('HearingdatesComponent', () => {
  let component: HearingdatesComponent;
  let fixture: ComponentFixture<HearingdatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HearingdatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingdatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
