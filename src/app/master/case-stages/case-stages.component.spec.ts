import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStagesComponent } from './case-stages.component';

describe('CaseStagesComponent', () => {
  let component: CaseStagesComponent;
  let fixture: ComponentFixture<CaseStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
