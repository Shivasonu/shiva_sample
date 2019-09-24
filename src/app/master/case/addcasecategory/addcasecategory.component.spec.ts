import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcasecategoryComponent } from './addcasecategory.component';

describe('AddcasecategoryComponent', () => {
  let component: AddcasecategoryComponent;
  let fixture: ComponentFixture<AddcasecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcasecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcasecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
