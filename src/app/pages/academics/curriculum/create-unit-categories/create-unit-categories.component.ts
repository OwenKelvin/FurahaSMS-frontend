import { Component, OnInit } from '@angular/core';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UnitCategoryInterface } from 'src/app/interfaces/unit-category.interface';
import { VIEW_UNIT_CATEGORY_CURRICULUM } from 'src/app/helpers/links.helpers';
import { map, filter, mergeMap, tap } from 'rxjs/operators';
import { formWithEditorMixin } from 'src/app/shared/mixins/form-with-editor.mixin';


@Component({
  selector: 'app-create-unit-categories',
  templateUrl: './create-unit-categories.component.html',
  styleUrls: ['./create-unit-categories.component.css']
})
export class CreateUnitCategoriesComponent extends formWithEditorMixin() implements OnInit {
  newUnitCategoryForm: FormGroup = this.fb.group({
    id: [null],
    name: [name, [Validators.required]],
    active: [false],
    description: [''],
    units: this.fb.array([])
  });
  paramId$ = this.route.paramMap.pipe(
    map(params => Number(params.get('id'))));
  constructor(
    private fb: FormBuilder,
    private unitCategoryService: UnitCategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { super(); }

  ngOnInit() {
    this.paramId$.pipe(
      filter(id => id < 1),
      tap(() => this.addSubject())
    ).subscribe();

    this.paramId$.pipe(
      filter(id => id > 0),
      mergeMap(id => this.unitCategoryService.get({ id })),
      tap(() => this.editFormSubject$.next(true)),
      tap((res) => this.generateForm(res)),
      tap(({ units }) => units?.forEach((item, index) => {
        this.addSubject();
        const { id, name, abbreviation: abbr, description, unit_category_id: unitCategory, active} = item;
        this.units.controls[index].setValue({ id, name, abbr, description, unitCategory, active });
      }))
    ).subscribe();

  }
  generateForm({ id = null, active = true, name = '', description = '' }: UnitCategoryInterface = {
    id: null, active: true, name: '', description: ''
  } as UnitCategoryInterface) {

    this.newUnitCategoryForm.setValue({ id, name, active, description, units: [] });
    // this.newUnitCategoryForm = this.fb.group({
    //   id: [id],
    //   name: [name, [Validators.required]],
    //   active: [active],
    //   description: [description],
    //   units: this.fb.array([])
    // });
  }
  get units() {
    return this.newUnitCategoryForm.get('units') as FormArray;
  }
  updateForm($event: FormGroup, i: number) {
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
    });
    this.units.push(newGroup);
  }
  allSectionsValid(): boolean {
    return (this.units).controls.every(item => item.valid);
  }
  get nameControl(): FormGroup {
    return this.newUnitCategoryForm.get('name') as FormGroup;
  }
  submit() {
    if (this.newUnitCategoryForm.valid) {
      this.submitInProgressSubject$.next(true);
      const dataSubmit = {
        ...this.newUnitCategoryForm.value,
        units: this.units.controls.map(item => item.value)
      };
      this.unitCategoryService.submit(dataSubmit)

        .subscribe({
          next: data => this.router.navigate([VIEW_UNIT_CATEGORY_CURRICULUM(data.id)]),
          error: () => this.submitInProgressSubject$.next(false)
        });
    } else {
      this.newUnitCategoryForm.markAllAsTouched();
    }
  }

  removeSubject(i: number) {
    const removalConfirmed = confirm(
      'Please confirm you wish to remove section'
    );
    if (removalConfirmed) {
      this.units.controls.splice(i, 1);
    }
  }
}
