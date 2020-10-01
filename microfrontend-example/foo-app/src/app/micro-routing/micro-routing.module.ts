import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MICRO_APP_NAME, MicroRoutingService } from './micro-routing.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class MicroRoutingModule {
  static forRoot(microapp: string): ModuleWithProviders<MicroRoutingModule> {
    return {
      ngModule: MicroRoutingModule,
      providers: [MicroRoutingService, { provide: MICRO_APP_NAME, useValue: microapp }]
    };
  }

  constructor(private microRoutingService: MicroRoutingService) {
    microRoutingService.initRouting();
  }
}
