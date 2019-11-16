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

  ngOnInit() {
    const win = this.window.nativeElement.parent;

    win.resize(480, 620);
    win.setMinimumSize(480, 620);
  }

  setRoute() {
    this.router.navigateByUrl('/hello');
  }

  textChanged(val: string) {
    this.name = val;
  }
}
