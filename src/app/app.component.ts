import { Component, ViewEncapsulation } from '@angular/core';
import { AspectRatioMode } from '@nodegui/nodegui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      #app {
        background-color: gray;
      }
      #button {
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
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
