import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddactComponent } from './addact.component';

describe('AddactComponent', () => {
  let component: AddactComponent;
  let fixture: ComponentFixture<AddactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
