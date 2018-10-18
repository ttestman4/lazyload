import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Mod2comp1Component } from './mod2comp1/mod2comp1.component';
import { Mod2comp2Component } from './mod2comp2/mod2comp2.component';
import { Mod2hostComponent } from './mod2host/mod2host.component';

@NgModule({
  imports: [
    CommonModule,
    Module2RoutingModule
  ],
  declarations: [Mod2comp1Component, Mod2comp2Component, Mod2hostComponent]
})
export class Module2Module { }
