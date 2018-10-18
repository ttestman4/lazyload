import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1comp1Component } from './mod1comp1.component';

describe('Mod1comp1Component', () => {
  let component: Mod1comp1Component;
  let fixture: ComponentFixture<Mod1comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
