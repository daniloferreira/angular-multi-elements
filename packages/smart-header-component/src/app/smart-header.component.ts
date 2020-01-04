import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  templateUrl: './smart-header.component.html',
  styleUrls: ['./smart-header.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SmartHeaderComponent {
  title = 'smart-header-component';
}
