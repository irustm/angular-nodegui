import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <window title="Angular app in window!">
      <text [style.font-size.px]="45">Hello, {{ name }}</text>

      <button [style.background-color]="'green'">
        Green button
      </button>
    </window>
  `
})
export class AppComponent {
  public name = 'World!';
}
