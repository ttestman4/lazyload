import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1comp2Component } from './mod1comp2.component';

describe('Mod1comp2Component', () => {
  let component: Mod1comp2Component;
  let fixture: ComponentFixture<Mod1comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
