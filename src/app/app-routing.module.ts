import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'module1',
  data: { preload: true },
  loadChildren: './module1/module1.module#Module1Module'
},
{ path: '', redirectTo: 'module1', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
