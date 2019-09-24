import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcasestudyComponent } from './editcasestudy.component';

describe('EditcasestudyComponent', () => {
  let component: EditcasestudyComponent;
  let fixture: ComponentFixture<EditcasestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcasestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
