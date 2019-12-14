import {
  Component,
  ViewEncapsulation,
  ViewChild,
  OnInit,
  ElementRef
} from '@angular/core';
import { AspectRatioMode } from '@nodegui/nodegui';
import { Router } from '@angular/router';
import { NgWindow } from '../../projects/angular-nodegui/src/lib/components/window';

const windowHeight = 480;
const windowWeight = 620;

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

  constructor(private router: Router) {}

  /**
   * Init component and configure window widget
   */
  ngOnInit(): void {
    const win = this.window.nativeElement.parent;

    win.resize(windowHeight, windowWeight);
    win.setMinimumSize(windowHeight, windowWeight);
  }

  /**
   * Change router
   */
  public goToPage(url: string): void {
    this.router.navigateByUrl(url);
  }

  /**
   * Change text from text edit
   */
  public onTextChanged(val: string): void {
    this.name = val;
  }
}
