import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LinkInterface } from 'src/app/interfaces/link.interface';
import { LinkService } from 'src/app/services/link.service';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.css']
})
export class RolesAndPermissionsComponent {
  links$: Observable<LinkInterface[]> = this.linkService.rolesAndPermissionsLinks;
  constructor(private linkService: LinkService) { }

}
