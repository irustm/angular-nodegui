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
        <progressbar [value]="40" [minimum]="0" [maximum]="100"></progressbar>
        <spinbox
          [prefix]="'aa'"
          [suffix]="'bb'"
          [singleStep]="10"
          [range]="{ minimum: 0, maximum: 50 }"
          [value]="20"
        ></spinbox>
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
