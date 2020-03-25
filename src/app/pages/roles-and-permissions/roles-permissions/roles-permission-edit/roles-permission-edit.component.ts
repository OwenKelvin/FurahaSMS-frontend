import { Component, OnInit } from '@angular/core';
import { RolesAndPermissionsService } from '../../services/roles-and-permissions.service';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, takeWhile, tap } from 'rxjs/operators';
import { Observable, forkJoin } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-roles-permission-edit',
  templateUrl: './roles-permission-edit.component.html',
  styleUrls: ['./roles-permission-edit.component.css']
})
export class RolesPermissionEditComponent implements OnInit {
  role$: Observable<any>;
  role: any;
  isLoading: boolean;
  componentIsActive: boolean;
  permissionsForm: FormGroup;
  isSubmitting: boolean;
  roleId: number;
  constructor(
    private rolesPermissionService: RolesAndPermissionsService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.componentIsActive = true;
    this.isLoading = true;
    this.role$ = this.route.paramMap
      .pipe(map(params => Number(params.get('id'))))
      .pipe(tap(id => this.roleId = id))
      .pipe(mergeMap(id => this.rolesPermissionService.getAllPermissionsStatusForRole(id)))
      .pipe(takeWhile(() => this.componentIsActive))
    this.role$.subscribe(res => {
      this.isLoading = false;
      this.role = res;
      this.updatePermissionsForm()
    })
  }
  updatePermissionsForm() {
    this.permissionsForm = this.fb.group({
      permissions: this.fb.array([])
    })

    this.role.permissionStatus.forEach(({ id, hasPermission, name }: any) => {
      this.formPermissions.push(this.fb.group({
        id: [id, [Validators.required]],
        name: [name],
        hasPermission: [hasPermission]
      }))
    });
  }
  get formPermissions() {
    return this.permissionsForm.get('permissions') as FormArray;
  }

  submitPermission() {
    this.isSubmitting = true;
    this.formPermissions.controls
      .filter(control => control.dirty)
      .map(control => control.value)
      .forEach(({ name, hasPermission}) => {
        this.rolesPermissionService.updatePermissionForRoleWithId(this.roleId, { name, hasPermission })
          .pipe(takeWhile(() => this.componentIsActive))
          .subscribe(() => {
            this.isSubmitting = false;
          }, () => this.isSubmitting = false)
      })
  }

}
