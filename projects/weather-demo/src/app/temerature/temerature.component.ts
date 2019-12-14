import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-temerature',
  templateUrl: './temerature.component.html',
  styleUrls: ['./temerature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemeratureComponent {
  @Input() now: string;
  @Input() min: string;
  @Input() max: string;

  public readonly sup = `<sup>o</sup>`;
  public readonly currentTempStyle = `
    font-size: 20px;
    width: 150px;
    qproperty-alignment: AlignCenter;
    color: white;
  `;
  public readonly smallInfo = `
    width: 150px;
    color: white;
    qproperty-alignment: AlignCenter;
`;
}
