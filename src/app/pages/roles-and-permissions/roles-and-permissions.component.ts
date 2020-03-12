import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-roles-and-permissions',
  templateUrl: './roles-and-permissions.component.html',
  styleUrls: ['./roles-and-permissions.component.css']
})
export class RolesAndPermissionsComponent implements OnInit {
  links$: Observable<any>

  constructor() { }

  ngOnInit() {
    this.links$ = of([
      { name: 'User Roles/ Permissions', icon: 'icon-user-circle-o', link: 'roles-and-permissions/user' },
      { name: 'Roles & Permissions', icon: 'icon-sliders', link: 'roles-and-permissions/roles' },
    ])
  }

}
