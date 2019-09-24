import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdepartmentsComponent } from './editdepartments.component';

describe('EditdepartmentsComponent', () => {
  let component: EditdepartmentsComponent;
  let fixture: ComponentFixture<EditdepartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdepartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
