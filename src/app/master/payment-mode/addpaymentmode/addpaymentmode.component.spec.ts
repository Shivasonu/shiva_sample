import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpaymentmodeComponent } from './addpaymentmode.component';

describe('AddpaymentmodeComponent', () => {
  let component: AddpaymentmodeComponent;
  let fixture: ComponentFixture<AddpaymentmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpaymentmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpaymentmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
