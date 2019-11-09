import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  ElementRef
} from '@angular/core';
import { WindowType, WidgetAttribute, AspectRatioMode } from '@nodegui/nodegui';
import { NgWindow } from '../../../../projects/angular-nodegui/src/lib/components/window';
import * as os from 'os';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('window', { static: true }) window: ElementRef<NgWindow>;

  public aspectRatioMode = AspectRatioMode.KeepAspectRatio;
  constructor() {}

  ngOnInit() {
    const win = this.window.nativeElement.parent;

    win.hide();
    win.resize(300, 300);

    win.setWindowFlag(WindowType.FramelessWindowHint, true);
    win.setWindowFlag(WindowType.Widget, true);

    const platform: string = os.platform();

    if (platform === 'darwin' || platform === 'win32') {
      win.setAttribute(WidgetAttribute.WA_TranslucentBackground, true);
    }

    win.show();
  }

  textChanged(val: string) {}
}
