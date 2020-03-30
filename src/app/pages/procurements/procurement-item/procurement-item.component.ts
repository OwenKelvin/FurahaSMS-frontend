import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-procurement-item',
  templateUrl: './procurement-item.component.html',
  styleUrls: ['./procurement-item.component.css']
})
export class ProcurementItemComponent implements OnInit {
  @Input() item: any;
  procurementItem: any;
  constructor() { }

  ngOnInit() {
    this.procurementItem = this.item;
  }

}
