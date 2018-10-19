import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Svc1Service } from './svc1.service';

export { Svc1Service } from './svc1.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Svc1Service],
  declarations: []
})
export class SharedModule {
  constructor(@Optional() @SkipSelf() parentModule: SharedModule) {
    if (parentModule) {
      throw new Error(
        'SharedModule is already loaded. Import it in the AppModule only');
    }
  }
}
