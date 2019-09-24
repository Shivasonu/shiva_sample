import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaymentmodeComponent } from './editpaymentmode.component';

describe('EditpaymentmodeComponent', () => {
  let component: EditpaymentmodeComponent;
  let fixture: ComponentFixture<EditpaymentmodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpaymentmodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaymentmodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
