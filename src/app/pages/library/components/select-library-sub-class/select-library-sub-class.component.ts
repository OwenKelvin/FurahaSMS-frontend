import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-select-library-sub-class',
  templateUrl: './select-library-sub-class.component.html',
  styleUrls: ['./select-library-sub-class.component.css']
})
export class SelectLibrarySubClassComponent implements OnInit {
  @Input() id;
  constructor() { }

  ngOnInit() {
  }

}
