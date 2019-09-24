import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCategoryComponent } from './court-category.component';

describe('CourtCategoryComponent', () => {
  let component: CourtCategoryComponent;
  let fixture: ComponentFixture<CourtCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
