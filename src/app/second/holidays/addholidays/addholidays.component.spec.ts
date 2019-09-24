import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddholidaysComponent } from './addholidays.component';

describe('AddholidaysComponent', () => {
  let component: AddholidaysComponent;
  let fixture: ComponentFixture<AddholidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddholidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddholidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
