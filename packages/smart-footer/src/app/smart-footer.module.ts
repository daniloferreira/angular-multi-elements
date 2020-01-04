import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, DoBootstrap, Injector, NgModule} from '@angular/core';

import { SmartFooterComponent } from './smart-footer.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    SmartFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [SmartFooterComponent],
  providers: []
})
export class SmartFooterModule implements DoBootstrap {

  constructor(injector: Injector) {
    const custom = createCustomElement(SmartFooterComponent, {injector});
    console.log(customElements.get('smart-footer'));
    if (!customElements.get('smart-footer')) {
      customElements.define('smart-footer', custom);
    }
  }
  ngDoBootstrap(appRef: ApplicationRef): void {
  } }
