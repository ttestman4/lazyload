import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Mod2comp1Component } from './mod2comp1/mod2comp1.component';
import { Mod2comp2Component } from './mod2comp2/mod2comp2.component';
import { Mod2hostComponent } from './mod2host/mod2host.component';

const routes: Routes = [{
  path: 'host2',
  component: Mod2hostComponent,
  children: [{
    path: 'comp1',
    component: Mod2comp1Component
  },
  {
    path: 'comp2',
    component: Mod2comp2Component
  },
  { path: '', redirectTo: 'comp1' },
  ]
},
  { path: '', redirectTo: 'host2' },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
