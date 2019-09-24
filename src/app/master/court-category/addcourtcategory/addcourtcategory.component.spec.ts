import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourtcategoryComponent } from './addcourtcategory.component';

describe('AddcourtcategoryComponent', () => {
  let component: AddcourtcategoryComponent;
  let fixture: ComponentFixture<AddcourtcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcourtcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourtcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
