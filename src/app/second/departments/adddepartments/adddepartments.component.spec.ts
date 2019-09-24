import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddepartmentsComponent } from './adddepartments.component';

describe('AdddepartmentsComponent', () => {
  let component: AdddepartmentsComponent;
  let fixture: ComponentFixture<AdddepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
