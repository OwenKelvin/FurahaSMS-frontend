import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { RolesAndPermissionsService } from '../services/roles-and-permissions.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-roles-permissions',
  templateUrl: './roles-permissions.component.html',
  styleUrls: ['./roles-permissions.component.css']
})
export class RolesPermissionsComponent implements OnInit, OnDestroy {

  role: number;
  roles$: Observable<any>;
  roles: any[];
  componentIsActive: boolean;
  isLoading = true;
  filter: string | RegExp;
  constructor(
    private rolesPermissionsService: RolesAndPermissionsService
  ) { }

  ngOnInit() {
    this.filter = '';
    this.componentIsActive = true;
    this.roles$ = this.rolesPermissionsService.roles$
      .pipe(takeWhile(()=> this.componentIsActive));
    this.roles$.subscribe(res => {
      this.roles = res;
      this.isLoading = false;
    });
  }
  getRoleWithId(idNumber: number) {
    return this.roles.find(({ id }) => id === idNumber);
  }

  getFilteredPermissionsWithRoleId(idNumber: number) {
    return this.getRoleWithId(idNumber).permissions.filter(({name}: any) => (new RegExp(this.filter).test(name)));
  }
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
