import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserroleComponent } from './adduserrole.component';

describe('AdduserroleComponent', () => {
  let component: AdduserroleComponent;
  let fixture: ComponentFixture<AdduserroleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdduserroleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
