import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcasecategoryComponent } from './editcasecategory.component';

describe('EditcasecategoryComponent', () => {
  let component: EditcasecategoryComponent;
  let fixture: ComponentFixture<EditcasecategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcasecategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcasecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
