import { Component } from '@angular/core';
import { LinkService } from 'src/app/services/link.service';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  links$: Observable<LinkInterface[]> = this.linkService.dashboardLinks;
  constructor( private linkService: LinkService ) { }
}
