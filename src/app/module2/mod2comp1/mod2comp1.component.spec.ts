import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2comp1Component } from './mod2comp1.component';

describe('Mod2comp1Component', () => {
  let component: Mod2comp1Component;
  let fixture: ComponentFixture<Mod2comp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2comp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2comp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
