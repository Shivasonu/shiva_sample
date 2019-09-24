import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcasestudyComponent } from './viewcasestudy.component';

describe('ViewcasestudyComponent', () => {
  let component: ViewcasestudyComponent;
  let fixture: ComponentFixture<ViewcasestudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcasestudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcasestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
