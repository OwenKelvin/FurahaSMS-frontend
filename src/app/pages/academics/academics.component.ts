import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent {

  links$: Observable<LinkInterface[]> = this.linkService.academicsLinks;
  constructor(private linkService: LinkService) { }

}
