import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { LinkInterface } from '../../../interfaces/link.interface';

@Component({
  selector: 'app-dashboard-link',
  templateUrl: './dashboard-link.component.html',
  styleUrls: ['./dashboard-link.component.css']
})
export class DashboardLinkComponent implements OnInit {
  @Input() link: LinkInterface;
  constructor(private store: Store<fromStore.AppState>) { }

  ngOnInit() {
  }

}
