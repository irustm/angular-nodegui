import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  ElementRef
} from '@angular/core';
import {
  WindowType,
  WidgetAttribute,
  AspectRatioMode,
  QApplication
} from '@nodegui/nodegui';
import { NgWindow } from '../../../../projects/angular-nodegui/src/lib/components/window';
import * as os from 'os';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('window', { static: true }) window: ElementRef<NgWindow>;

  public aspectRatioMode: AspectRatioMode = AspectRatioMode.KeepAspectRatio;
  public date: Date = new Date();

  constructor() {}

  /**
   * Init component and configure window widget
   */
  ngOnInit() {
    const win = this.window.nativeElement.parent;

    win.hide();
    win.resize(300, 340);

    win.setWindowFlag(WindowType.FramelessWindowHint, true);
    win.setWindowFlag(WindowType.Widget, true);

    const platform: string = os.platform();

    if (platform === 'darwin' || platform === 'win32') {
      win.setAttribute(WidgetAttribute.WA_TranslucentBackground, true);
    }

    win.show();
  }

  /**
   * Refresh weather info
   */
  onRefresh(): void {}

  /**
   * Close applicatiion
   */
  onClose(): void {
    QApplication.instance().quit();
  }
}
