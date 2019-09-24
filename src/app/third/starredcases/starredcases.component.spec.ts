import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarredcasesComponent } from './starredcases.component';

describe('StarredcasesComponent', () => {
  let component: StarredcasesComponent;
  let fixture: ComponentFixture<StarredcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarredcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarredcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
