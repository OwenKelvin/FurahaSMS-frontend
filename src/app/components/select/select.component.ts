import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR} from '@angular/forms';

import {UnitCategoryService} from 'src/app/services/unit-category.service';
import {ClassLevelCategoryService} from 'src/app/services/class-level-category.service';
import {ClassLevelService} from 'src/app/services/class-level.service';
import {UnitLevelService} from 'src/app/services/unit-level.service';
import {AcademicYearService} from 'src/app/pages/academics/services/academic-year.service';
import {Observable} from 'rxjs';
import {AppFormService} from 'src/app/services/AppForm.service';
import {GenderService} from 'src/app/services/gender.service';
import {ReligionService} from 'src/app/services/religion.service';
import {ProcurementService} from 'src/app/services/procurement.service';
import {UnitsService} from 'src/app/services/units.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})

export class SelectComponent
  implements OnInit, ControlValueAccessor, OnChanges {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Input() value: any;
  @Input() multiple: any;
  @Input() parentId: number | null;
  @Input() triggerValidation: boolean;
  @Input() type:
    'unit-categories'
    | 'units'
    | 'units:academic-year'
    | 'academic-years:active'
    | 'class-level-categories'
    | 'class-levels:level'
    | 'unit-levels'
    | 'gender'
    | 'religion'
    | 'support-staffs'
    | 'procurement:items-categories'
    | 'vendor'
  ;
  disabled: boolean;
  formControl: FormControl;
  hint: string;
  categories$: Observable<any>;
  fieldError: any;

  multipleSelector = false;

  onChanges: ($value: any) => void;
  onTouched: () => void;
  error: { required: string } = {required: 'Please Select a Category'};
  categorySelected: string | { id: number; name: string }[] = '';
  categories: Array<any> = [];
  inputValue: string;

  constructor(
    private subjectCategoriesService: UnitCategoryService,
    private classLevelsCategoriesService: ClassLevelCategoryService,
    private classLevels: ClassLevelService,
    private unitLevel: UnitLevelService,
    private academicYearService: AcademicYearService,
    private appFormService: AppFormService,
    private genderService: GenderService,
    private religionService: ReligionService,
    private procurementService: ProcurementService,
    private unitService: UnitsService
  ) {

    this.formControl = new FormControl();
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.inputValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChanges = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  get isRequired(): boolean {
    if (this.formControl.validator) {
      const validationResult = this.formControl.validator(this.formControl);
      return (validationResult !== null && validationResult.required === true);
    }
    return false;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (!this.disabled) {
      if (!isDisabled) {
        this.formControl.enable();
        this.formControl.updateValueAndValidity();
      } else {
        // this.formControl.disable(); // TODO Check why disabled is not working well
        this.disabled = true;
      }
    }
  }

  ngOnInit() {
    if (typeof this.multiple === 'string') {
      this.multipleSelector = true;
    }

    switch (this.type) {
      case 'vendor':
        this.categories$ = this.procurementService
          .getVendors();
        break;
      case 'procurement:items-categories':
        this.setParams({label: 'Item Category'});
        this.categories$ = this.procurementService
          .getItemCategories();
        break;
      case 'academic-years:active':
        this.setParams({label: 'Academic Year'});
        this.categories$ = this.academicYearService
          .getFilter({active: true});

        break;
      case 'unit-levels':
        this.setParams({label: 'Unit Levels'});
        const data: any = {unit: null};
        if (this.parentId) {
          data.unit = this.parentId;
        }
        this.categories$ = this.unitLevel.getAll(data);
        break;
      case 'class-levels:level':
        this.setParams({label: 'Class Levels'});
        this.categories$ = this.classLevels.getAll({includeLevels: 1});
        break;
      case 'class-level-categories':
        this.setParams({label: 'Units'});
        this.categories$ = this.classLevelsCategoriesService.all$;
        break;
      case 'unit-categories':
        this.setParams({label: 'Unit Category'});
        this.categories$ = this.subjectCategoriesService.all$;
        break;
      case 'units':
        this.setParams({label: 'Units'});
        this.categories$ = this.unitService.getAll();
        break;
      case 'support-staffs':
        this.setParams({label: 'Units'});
        this.categories$ = this.unitLevel.getFilter({academicYearId: this.parentId});
        break;
      case 'units:academic-year':
        this.setParams({label: 'Units'});
        this.categories$ = this.unitLevel.getFilter({academicYearId: this.parentId});
        break;
      case 'gender':
        this.setParams({label: 'Gender'});
        this.categories$ = this.genderService.all$;
        break;
      case 'religion':
        this.setParams({label: 'Religion'});
        this.categories$ = this.religionService.all$;
        break;
      default:
        this.categories = [];
        break;
    }
  }

  setParams({label}: { label: string }) {
    this.label = label;
    this.error.required = `The ${label} field is required`;
    this.hint = `Please select ${label}`;
  }

  ngOnChanges(changes: SimpleChanges) {
    const triggerValidation: SimpleChange = changes.triggerValidation;
    if (triggerValidation && !triggerValidation.firstChange) {
      this.formControl.markAsTouched();
      this.validateField();
    }
    const parentId: SimpleChange = changes.parentId;
    if (parentId) {
      if (this.type === 'units:academic-year') {
        this.unitLevel
          .getFilter({academicYearId: this.parentId});
      }
      if (this.type === 'unit-levels') {
        this.categories$ = this.unitLevel.getAll({unit: this.parentId});
      }
    }
  }

  validate(control: FormControl) {
    this.formControl = control;
  }

  validateField() {
    // this.onTouched();
    this.fieldError = this.appFormService.getErrorMessage(this.formControl, this.label);
  }

  removeSelect(id: number) {
    const newValue = (this.formControl.value as Array<any>).filter(
      item => item !== id
    );
    this.categorySelected = (this.categorySelected as Array<any>).filter(
      item => item.id !== id
    );
    this.formControl.setValue(newValue);
  }

  selectedCategory({source}: any) {
    const selected = (source).selected;
    if (selected) {
      const {viewValue, value} = selected as {
        viewValue: string;
        value: number;
      };
      if (this.multipleSelector) {
        this.onChanges(this.formControl.value);
        this.categorySelected = selected.map((item: any) => ({name: item.viewValue, id: item.value}));
      } else {
        this.categorySelected = viewValue;
        this.onChanges(value);
      }
    } else {
      this.onChanges(null);
    }
  }
}
