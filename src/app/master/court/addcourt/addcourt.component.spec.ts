import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcourtComponent } from './addcourt.component';

describe('AddcourtComponent', () => {
  let component: AddcourtComponent;
  let fixture: ComponentFixture<AddcourtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcourtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcourtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
