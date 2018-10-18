import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod2hostComponent } from './mod2host.component';

describe('Mod2hostComponent', () => {
  let component: Mod2hostComponent;
  let fixture: ComponentFixture<Mod2hostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod2hostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod2hostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
