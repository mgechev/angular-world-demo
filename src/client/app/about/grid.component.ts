import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-grid',
  template: `
    <h1>Title</h1>
    <ul [routerLink]="">
      <li>row 1</li>
      <li [routerLink]="">row 2</li>
      <li>row 3</li>
    </ul>
  `
})
export class GridComponent {}
