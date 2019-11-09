import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SummaryComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() description: string;

  public summary;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(): void {
    this.summary = `<b>${this.title}<b> : <i>${this.description}</i>`;
  }
}
