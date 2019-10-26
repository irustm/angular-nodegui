import { Component } from '@angular/core';
import { AspectRatioMode } from '@nodegui/nodegui';

@Component({
  selector: 'app-root',
  template: `
    <window title="Angular app in window!">
      <view>
        <image
          [src]="'C:/temp/angular.png'"
          [aspectRatioMode]="aspectRatioMode"
        ></image>
        <text [style.font-size.px]="45">Hello, {{ name }}</text>
        <checkbox [checked]="true"></checkbox>
        <checkbox [checked]="true" [enabled]="false"></checkbox>
        <button [style.background-color]="'green'" (clicked)="setName()">
          Green button
        </button>
        <linedit
          [text]="name"
          [placeholderText]="'Insert your name'"
          (textChanged)="textChanged($event)"
        ></linedit>
      </view>
    </window>
  `
})
export class AppComponent {
  public name = 'World!';
  public aspectRatioMode = AspectRatioMode.KeepAspectRatio;

  setName() {
    this.name = 'irustm';
  }

  textChanged(val: string) {
    this.name = val;
  }
}
