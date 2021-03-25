import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolesAndPermissionsService {

  roles$: Observable<any> = this.http.get('api/permissions-and-roles/roles');

  constructor(private http: HttpClient) { }

  updatePermissionForRoleWithId(roleId: number, data: { name: any; hasPermission: any }) {
    return this.http.patch(`api/permissions-and-roles/roles/${roleId}`, data);
  }
  getAllPermissionsStatusForRole(id: number): any {
    return this.http.get(`api/permissions-and-roles/roles/${id}?allPermissions=${true}`);
  }
  getRoleWithId(id: number): any {
    return this.http.get(`api/permissions-and-roles/roles/${id}`);
  }

}
