import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { LinkService } from './../../services/link.service';
import { Observable } from 'rxjs';
import { LinkInterface } from './../../interfaces/link.interface';

@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrls: ['./dashboard-links.component.css']
})
export class DashboardLinksComponent implements OnInit {
  @Input() type: string;
  links$: Observable<LinkInterface[]>;
  title: string;
  constructor(private store: Store<fromStore.AppState>, private linkService: LinkService) { }

  ngOnInit() {
    this.links$ = this.linkService.getLinks(this.type);
    const item = [
      {
        name: 'Admissions', type: 'admissions'
      }, {
        name: 'Dashboard', type: 'dashboard'
      }, {
        name: 'Student Admissions', type: 'admissions:students'
      }
    ].filter( title => title.type === this.type)[0];
    if (item) {
      this.title = item.name;
    } else {
      this.title = 'Dashboard';
    }
  }

}
