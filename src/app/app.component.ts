import { Component } from '@angular/core';
import { AspectRatioMode } from '@nodegui/nodegui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
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
