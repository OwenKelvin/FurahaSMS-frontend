import { Component, OnInit } from '@angular/core';
import { LinkService } from './../../services/link.service';
import { LinkInterface } from './../../interfaces/link.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  links$: Observable<LinkInterface[]>;
  constructor( private linkService: LinkService) { }

  ngOnInit() {
    this.links$ = this.linkService.getDashboardLinks();
  }

}
