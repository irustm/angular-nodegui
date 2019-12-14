import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { dateFormatter } from '../utils/helpers';

@Component({
  selector: 'app-placedate',
  templateUrl: './placedate.component.html',
  styleUrls: ['./placedate.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PlacedateComponent {
  @Input() place: string;
  @Input() set date(value: Date) {
    this.fullDate = dateFormatter(value);
  }

  public fullDate: string;

  public  readonly placeStyle = `
    flex: 1;
    font-size: 20px;
    qproperty-alignment: 'AlignCenter';
    color: white;
  `;

  public readonly dateStyle = `
    flex: 1;
    font-size: 12px;
    qproperty-alignment: 'AlignCenter';
    color: white;
  `;
}
