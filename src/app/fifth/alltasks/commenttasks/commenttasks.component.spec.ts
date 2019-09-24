import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenttasksComponent } from './commenttasks.component';

describe('CommenttasksComponent', () => {
  let component: CommenttasksComponent;
  let fixture: ComponentFixture<CommenttasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommenttasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommenttasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
