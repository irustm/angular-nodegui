import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <text>
      about works!
    </text>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
