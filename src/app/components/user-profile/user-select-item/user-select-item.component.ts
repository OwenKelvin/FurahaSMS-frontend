import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-select-item',
  templateUrl: './user-select-item.component.html',
  styleUrls: ['./user-select-item.component.css']
})
export class UserSelectItemComponent implements OnInit {

  @Input() label: string;
  @Input() value: number;
  @Input() valueName: string;
  @Input() editMode: boolean;
  @Input() items: Observable<any[]>;
  editable: boolean = false;
  editHovered: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
