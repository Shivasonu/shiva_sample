import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditactComponent } from './editact.component';

describe('EditactComponent', () => {
  let component: EditactComponent;
  let fixture: ComponentFixture<EditactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
