import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarchivedcasesComponent } from './carchivedcases.component';

describe('CarchivedcasesComponent', () => {
  let component: CarchivedcasesComponent;
  let fixture: ComponentFixture<CarchivedcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarchivedcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarchivedcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
