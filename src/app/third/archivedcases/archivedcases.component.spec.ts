import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedcasesComponent } from './archivedcases.component';

describe('ArchivedcasesComponent', () => {
  let component: ArchivedcasesComponent;
  let fixture: ComponentFixture<ArchivedcasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedcasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
