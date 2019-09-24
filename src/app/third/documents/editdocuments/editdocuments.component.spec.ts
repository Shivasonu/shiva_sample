import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdocumentsComponent } from './editdocuments.component';

describe('EditdocumentsComponent', () => {
  let component: EditdocumentsComponent;
  let fixture: ComponentFixture<EditdocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
