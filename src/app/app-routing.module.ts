import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'module1',
  loadChildren: './module1/module1.module#Module1Module'
}, {
  path: 'module2',
  loadChildren: './module2/module2.module#Module2Module'
},
{ path: '', redirectTo: 'module1', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
