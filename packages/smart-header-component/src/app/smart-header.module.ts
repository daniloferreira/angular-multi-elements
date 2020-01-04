import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { SmartHeaderComponent } from './smart-header.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    SmartHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [SmartHeaderComponent]
})
export class SmartHeaderModule implements DoBootstrap {
  constructor(injector: Injector) {
    const custom = createCustomElement(SmartHeaderComponent, {injector});
    if (!customElements.get('smart-header')) {
      customElements.define('smart-header', custom);
    }
  }

  ngDoBootstrap(appRef: ApplicationRef): void {
  }
}
