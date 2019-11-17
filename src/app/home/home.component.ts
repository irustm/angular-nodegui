import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <text>
      home works!
    </text>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
