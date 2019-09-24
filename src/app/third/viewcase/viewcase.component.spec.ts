import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcaseComponent } from './viewcase.component';

describe('ViewcaseComponent', () => {
  let component: ViewcaseComponent;
  let fixture: ComponentFixture<ViewcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
