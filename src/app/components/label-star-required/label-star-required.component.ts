import {Component} from '@angular/core';

@Component({
  selector: 'app-label-star-required',
  templateUrl: './label-star-required.component.html',
  styleUrls: ['./label-star-required.component.css']
})
export class LabelStarRequiredComponent {
  constructor() {
  }
}

@Component({
  selector: 'app-star-required',
  template: `<span class='icon-star required'></span>`,
  styleUrls: ['./label-star-required.component.css']
})

export class StarRequiredComponent {
  constructor() {
  }
}
