import {
  Component,
  OnInit,
  Input,
  forwardRef,
  SimpleChanges,
  SimpleChange,
  OnChanges
} from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NG_VALIDATORS
} from '@angular/forms';

import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { UnitCategoryService } from 'src/app/services/unit-category.service';
import { ClassLevelCategoryService } from 'src/app/services/class-level-category.service';
import { ClassLevelService } from 'src/app/services/class-level.service';
import { UnitLevelService } from 'src/app/services/unit-level.service';
import { AcademicYearService } from 'src/app/pages/academics/services/academic-year.service';
import { Observable } from 'rxjs';
import { AppFormService } from 'src/app/services/AppForm.service';
import { GenderService } from 'src/app/services/gender.service';
import { ReligionService } from 'src/app/services/religion.service';
import { ProcurementService } from 'src/app/services/procurement.service';
import { UnitsService } from 'src/app/services/units.service';

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
  disabled: boolean;
  label: string;
  formControl: FormControl;
  hint: string;
  categories$: Observable<any>;
  fieldError: any;
  @Input() triggerValidation: boolean;

  constructor(
    private subjectCategoriesService: UnitCategoryService,
    private classLevelsCategoriesService: ClassLevelCategoryService,
    private classLevels: ClassLevelService,
    private unitLevel: UnitLevelService,
    private academicYearService: AcademicYearService,
    private store: Store<AppState>,
    private appFormService: AppFormService,
    private genderService: GenderService,
    private religionService: ReligionService,
    private procurementService: ProcurementService,
    private unitService: UnitsService
  ) {

    this.formControl = new FormControl();
  }

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
  @Input() id: string;
  @Input() value: any;
  @Input() multiple: any;
  @Input() parentId: number;
  multipleSelector = false;

  onChanges: ($value) => void;
  onTouched: () => void;
  error: { required: string; };
  categorySelected: string | { id: number; name: string; }[];
  categories: Array<any>;
  inputValue;
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
    this.error = { required: 'Please Select a Category' };
    this.categorySelected = '';
    this.categories = [];
    switch (this.type) {
      case 'vendor':
        this.label = 'Vendor';
        this.error.required = 'Vendor is required';
        this.hint = 'Please select a vendor';
        this.categories$ = this.procurementService
          .getVendors();
        break;
      case 'procurement:items-categories':
        this.label = 'Item Category';
        this.error.required = 'Item Category is required';
        this.hint = 'Please select an Item Category';
        this.categories$ = this.procurementService
          .getItemCaterories();
        break;
      case 'academic-years:active':
        this.label = 'Academic Year';
        this.error.required = 'Academic Year is required';
        this.hint = 'Please select an Academic Year';
        this.categories$ = this.academicYearService
          .getFilter({ active: true })
         
        break;
      case 'unit-levels':
        this.label = 'Unit Levels';
        this.error.required = 'Unit Level is required';
        this.hint = 'Please select a unit';
        const data = { unit: null };
        if (this.parentId) {
          data.unit = this.parentId;
        }
        this.categories$ = this.unitLevel.getAll(data);
        break;
      case 'class-levels:level':
        this.label = 'Class Levels';
        this.error.required = 'Class Level is required';
        this.hint = 'Please select a class level';
        this.categories$ = this.classLevels.getAll({ includeLevels: 1 });
        break;
      case 'class-level-categories':
        this.label = 'Unit';
        this.error.required = 'The unit field is required';
        this.hint = 'Please select a unit';
        this.categories$ = this.classLevelsCategoriesService.getAll();
        break;
      case 'unit-categories':
        this.label = 'Unit Categories';
        this.error.required = 'The unit category field is required';
        this.hint = 'Please select a unit catgory';
        this.categories$ = this.subjectCategoriesService.getAll();
        break;
      case 'units':
        this.label = 'Unit';
        this.error.required = 'The unit field is required';
        this.hint = 'Please select a unit';
        this.categories$ = this.unitService.getAll();
        break;
      case 'support-staffs':
        this.label = 'Units';
        this.error.required = 'The units field is required';
        this.hint = 'Please select units';
        this.categories$ = this.unitLevel.getFilter({ academicYear: this.parentId });
        break;
      case 'units:academic-year':
        this.label = 'Units';
        this.error.required = 'The units field is required';
        this.hint = 'Please select units';
        this.categories$ = this.unitLevel.getFilter({ academicYear: this.parentId });
        break;
      case 'gender':
        this.setParams({
          label: 'Gender'
        });
        this.categories$ = this.genderService.getAll();
        break;
      case 'religion':
        this.setParams({
          label: 'Religion'
        });
        this.categories$ = this.religionService.getAll();
        break;
      default:
        this.categories = [];
        break;
    }
  }
  setParams({ label }: { label: string; }) {
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
          .getFilter({ academicYear: this.parentId })
      }
      if (this.type === 'unit-levels') {
        this.categories$ = this.unitLevel.getAll({ unit: this.parentId});
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
  removeSelect(id) {
    const newValue = (this.formControl.value as Array<any>).filter(
      item => item !== id
    );
    this.categorySelected = (this.categorySelected as Array<any>).filter(
      item => item.id !== id
    );
    this.formControl.setValue(newValue);
  }
  selectedCategory({ source }) {
    const selected = (source).selected;
    if (selected) {
      const { viewValue, value } = selected as {
        viewValue: string;
        value: number;
      };
      if (this.multipleSelector) {
        this.onChanges(this.formControl.value);
        this.categorySelected = selected.map(item => {
          return { name: item.viewValue, id: item.value };
        });
      } else {
        this.categorySelected = viewValue;
        this.onChanges(value);
      }
    } else {
      this.onChanges(null);
    }
  }
}
