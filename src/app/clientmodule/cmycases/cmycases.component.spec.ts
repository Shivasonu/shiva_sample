import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmycasesComponent } from './cmycases.component';

describe('CmycasesComponent', () => {
  let component: CmycasesComponent;
  let fixture: ComponentFixture<CmycasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmycasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmycasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
