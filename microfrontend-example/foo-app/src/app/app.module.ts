import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

import * as fromSettings from './app.settings';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define(fromSettings.APP_NAME, element);

    console.info(`${fromSettings.APP_NAME} micro app has been initialized`);
  }
}
