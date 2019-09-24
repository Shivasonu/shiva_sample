import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientmoduleComponent } from './clientmodule.component';

describe('ClientmoduleComponent', () => {
  let component: ClientmoduleComponent;
  let fixture: ComponentFixture<ClientmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
