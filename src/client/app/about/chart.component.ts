import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-chart',
  template: `
    <ul [routerLink]="">
      <li>chart 1</li>
      <li [routerLink]="">chart 2</li>
      <li>chart 3</li>
    </ul>
  `
})
export class ChartComponent {}
