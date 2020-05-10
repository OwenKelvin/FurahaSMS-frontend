import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-academics-curriculum',
  templateUrl: './academics-curriculum.component.html',
  styleUrls: ['./academics-curriculum.component.css']
})
export class AcademicsCurriculumComponent {

  links$: Observable<LinkInterface[]> = this.linkService.academicCurriculumLinks;
  constructor(private linkService: LinkService) { }

}
