import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  ElementRef
} from '@angular/core';
import { AspectRatioMode, WindowType } from '@nodegui/nodegui';
import { NgWindow } from '../../projects/angular-nodegui/src/lib/components/window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @ViewChild('window', { static: true }) window: ElementRef<NgWindow>;

  public name = 'irustm';
  public aspectRatioMode = AspectRatioMode.KeepAspectRatio;

  constructor() {}

  ngOnInit() {
    const win = this.window.nativeElement.parent;

    win.setMinimumSize(630, 560);
    // win.setWindowFlag(WindowType.FramelessWindowHint, true);
    // win.setWindowFlag(WindowType.Widget, true);
  }

  setName() {
    this.name = 'irustm';
  }

  textChanged(val: string) {
    this.name = val;
  }
}
