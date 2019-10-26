import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <window title="Angular app in window!">
      <view>
        <image [src]="'C:/temp/iw.jpg'"></image>
        <text [style.font-size.px]="45">Hello, {{ name }}</text>
        <checkbox [checked]="true"></checkbox>
        <checkbox [checked]="true" [enabled]="false"></checkbox>
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
