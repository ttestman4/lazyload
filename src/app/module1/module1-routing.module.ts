import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mod1comp1Component } from './mod1comp1/mod1comp1.component';
import { Mod1comp2Component } from './mod1comp2/mod1comp2.component';

const routes: Routes = [
  {
    path: 'comp1',
    component: Mod1comp1Component
  },
  {
    path: 'comp2',
    component: Mod1comp2Component
  },
  { path: '', redirectTo: 'comp1' },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
