import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    Hello {{ name }}
    <button [style.color]="'green'">Button - {{ name }}</button>
  `
})
export class AppComponent {
  public name = 'World!';
}
