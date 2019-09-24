import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudyattachementsComponent } from './casestudyattachements.component';

describe('CasestudyattachementsComponent', () => {
  let component: CasestudyattachementsComponent;
  let fixture: ComponentFixture<CasestudyattachementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasestudyattachementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudyattachementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
