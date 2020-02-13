import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { LinkService } from '../../services/link.service';
import { Observable } from 'rxjs';
import { LinkInterface } from '../../interfaces/link.interface';

@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrls: ['./dashboard-links.component.css']
})
export class DashboardLinksComponent implements OnInit {
  @Input() type: string;
  @Input() params: {id: number};
  links$: Observable<LinkInterface[]>;
  title: string;
  constructor(private store: Store<fromStore.AppState>, private linkService: LinkService) { }

  ngOnInit() {
    let params = {};
    if (this.params) {
      params = this.params.id;
    }

    this.links$ = this.linkService.getLinks({ type: this.type, id: params });
    const item = [
      {
        name: 'Dashboard', type: 'dashboard'
      }, {
        name: 'Student Admissions', type: 'admissions:students'
      }, {
        name: 'Academic Year', type: 'academics:academic-years'
      }, {
        name: null, type: 'academic-year'
      }, {
        name: 'Teaching Staff Admissions', type: 'admissions:teaching-staff'
      }
    ].filter(title => title.type === this.type)[0];
    if (item) {
      this.title = item.name;
    } else {
      this.title = this.type.split(':').map(subString => subString.charAt(0).toUpperCase() + subString.slice(1)).join(' ');
    }
  }

}
