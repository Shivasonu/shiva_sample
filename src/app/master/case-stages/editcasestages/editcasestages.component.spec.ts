import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcasestagesComponent } from './editcasestages.component';

describe('EditcasestagesComponent', () => {
  let component: EditcasestagesComponent;
  let fixture: ComponentFixture<EditcasestagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcasestagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcasestagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
