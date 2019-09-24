import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditleavesComponent } from './editleaves.component';

describe('EditleavesComponent', () => {
  let component: EditleavesComponent;
  let fixture: ComponentFixture<EditleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
