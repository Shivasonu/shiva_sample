import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasestagesComponent } from './addcasestages.component';

describe('AddcasestagesComponent', () => {
  let component: AddcasestagesComponent;
  let fixture: ComponentFixture<AddcasestagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcasestagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcasestagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
