import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ name }}
    <button>text - {{ name }}</button>
  `
})
export class AppComponent {
  public name = 'World!';
}
