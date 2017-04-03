import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-modal',
  template: `
    <div>
      <header>
        <span>Title</span>
        <span>X</span>
      </header>
      <section>Random content</section>
    </div>
  `
})
export class ModalComponent { }
