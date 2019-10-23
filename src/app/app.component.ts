import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <window title="Angular app in window!">
      <view>
        <text [style.font-size.px]="45">Hello, {{ name }}</text>

        <button [style.background-color]="'green'" (clicked)="setName()">
          Green button
        </button>
      </view>
    </window>
  `
})
export class AppComponent {
  public name = 'World!';

  setName() {
    this.name = 'irustm';
  }
}
