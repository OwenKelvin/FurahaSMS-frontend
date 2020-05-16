import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-teaching-staff-admission',
  templateUrl: './teaching-staff-admission.component.html',
  styleUrls: ['./teaching-staff-admission.component.css']
})
export class TeachingStaffAdmissionComponent{

  links$: Observable<LinkInterface[]> = this.linkService.teachingStaffAdmissionsLinks;
  constructor(private linkService: LinkService) { }

}
