import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temerature',
  templateUrl: './temerature.component.html',
  styleUrls: ['./temerature.component.scss']
})
export class TemeratureComponent implements OnInit {
  @Input() now: string;
  @Input() min: string;
  @Input() max: string;

  constructor() {}

  ngOnInit() {}
}
