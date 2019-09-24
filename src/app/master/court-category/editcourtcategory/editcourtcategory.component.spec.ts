import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcourtcategoryComponent } from './editcourtcategory.component';

describe('EditcourtcategoryComponent', () => {
  let component: EditcourtcategoryComponent;
  let fixture: ComponentFixture<EditcourtcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcourtcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcourtcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
