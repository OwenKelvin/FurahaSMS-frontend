import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { VIEW_UNIT_CATEGORY_CURRICULUM } from 'src/app/helpers/links.helpers';
import { loadErrorMessagesSuccess } from 'src/app/store/actions/error-message.actions';

interface Ierror {
  name: string;
}

@Component({
  selector: 'app-create-unit-categories',
  templateUrl: './create-unit-categories.component.html',
  styleUrls: ['./create-unit-categories.component.css']
})
export class CreateUnitCategoriesComponent implements OnInit {
  newUnitCategoryForm: FormGroup;
  errors: Ierror;
  newForm: boolean;
  submitInProgress: boolean;
  constructor(
    private fb: FormBuilder,
    private unitCategoryService: UnitCategoryService,
    private router: Router,
    private store: Store<AppState>) { }

  ngOnInit() {
    this.newUnitCategoryForm = this.fb.group({
      units: this.fb.array([])
    });
    this.addSubject();
    this.generateForm();
    this.errors = { name: '' };
    let activatedRoute: ActivatedRouteSnapshot;
    if (
      this.router.routerState.root &&
      this.router.routerState.root.children &&
      this.router.routerState.root.children[0]
    ) {
      activatedRoute = this.router.routerState.root.children[0].children[0]
        .children[0].snapshot;
      const id = activatedRoute.params.id;
      if (id === undefined) {
        this.newForm = true;
      } else {
        this.newForm = false;
        this.unitCategoryService.get({ id }).subscribe(item => {
          this.generateForm(item);
        });
      }
    }
    console.log(this.newUnitCategoryForm);
  }
  generateForm(
    { id = null, active = true, name = '', description = '' }: UnitCategoryInterface = {
      id: null,
      active: true,
      name: '',
      description: ''
    } as UnitCategoryInterface
  ) {
    this.newUnitCategoryForm = this.fb.group({
      id: [id],
      name: [name, [Validators.required]],
      active: [active],
      description: [description],
      units: this.units
    });
  }
  get units() {
    return this.newUnitCategoryForm.get('units') as FormArray;
  }
  updateForm($event: FormGroup, i) {
    // console.log($event.value)
    // console.log(this.units.controls[i].value)
    console.log(this.newUnitCategoryForm);
    this.units.controls[i].setValue($event.value);


  }
  addSubject() {
    const newGroup = this.fb.group({
      id: [null, []],
      name: ['', [Validators.required]],
      abbr: ['', [Validators.required]],
      description: [''],
      unitCategory: [null],
      active: [true],
      // classLevels: this.fb.array([
      //   this.fb.group({ classLevels: [], name: ['', [Validators.required]] })
      // ])
    });
    this.units.push((newGroup as unknown) as never);
  }
  allSectionsValid(): boolean {
    return (this.units).controls.every(item => item.valid);
  }
  submit() {
    this.submitInProgress = true;
    if (this.newUnitCategoryForm.valid) {
      const dataSubmit = {
        ...this.newUnitCategoryForm.value,
        units: this.units.controls.map(item => item.value)
      };
      this.unitCategoryService.submit(dataSubmit).subscribe(data => {
        this.router.navigate([VIEW_UNIT_CATEGORY_CURRICULUM(data.id)]);
        if (this.newForm) {
          this.generateForm();
          this.newUnitCategoryForm.get('name').clearValidators();
          this.newUnitCategoryForm.get('name').updateValueAndValidity();
          this.addSubject();
        }
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: 'Successfully created  unit category',
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));
      }, error => {
          this.store.dispatch(loadErrorMessagesSuccess({
            body: error.help,
            show: true,
            title: error.message,
            status: error.status
          }));
          this.submitInProgress = true;
      });
    } else {
      this.newUnitCategoryForm.markAllAsTouched();
    }
  }
  removeSubject(i) {
    const removalConfirmed = confirm(
      'Please confirm you wish to remove section'
    );
    if (removalConfirmed) {
      this.units.controls.splice(i, 1);
    }
  }
}
