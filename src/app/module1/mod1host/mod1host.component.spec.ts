import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod1hostComponent } from './mod1host.component';

describe('Mod1hostComponent', () => {
  let component: Mod1hostComponent;
  let fixture: ComponentFixture<Mod1hostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod1hostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod1hostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
