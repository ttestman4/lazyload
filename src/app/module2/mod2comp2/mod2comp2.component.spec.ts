import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2comp2Component } from './mod2comp2.component';

describe('Mod2comp2Component', () => {
  let component: Mod2comp2Component;
  let fixture: ComponentFixture<Mod2comp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2comp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2comp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
