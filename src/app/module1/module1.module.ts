import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Mod1comp1Component } from './mod1comp1/mod1comp1.component';
import { Mod1comp2Component } from './mod1comp2/mod1comp2.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [Mod1comp1Component, Mod1comp2Component]
})
export class Module1Module { }
