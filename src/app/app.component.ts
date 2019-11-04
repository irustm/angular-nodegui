import { Component, ViewEncapsulation } from '@angular/core';
import { AspectRatioMode } from '@nodegui/nodegui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public name = 'irustm';
  public aspectRatioMode = AspectRatioMode.KeepAspectRatio;

  setName() {
    this.name = 'irustm';
  }

  textChanged(val: string) {
    this.name = val;
  }
}
