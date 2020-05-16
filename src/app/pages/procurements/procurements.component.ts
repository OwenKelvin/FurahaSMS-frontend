import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-procurements',
  templateUrl: './procurements.component.html',
  styleUrls: ['./procurements.component.css']
})
export class ProcurementsComponent {

  links$: Observable<LinkInterface[]> = this.linkService.procurementLinks;
  constructor(private linkService: LinkService) { }
}
