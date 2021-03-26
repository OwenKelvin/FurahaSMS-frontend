import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProcurementService} from 'src/app/services/procurement.service';
import {Observable, Subscriber} from 'rxjs';
import {TabsetComponent} from 'ngx-bootstrap/tabs';
import {CanComponentDeactivate} from 'src/app/guards/can-deactivate.guard';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-create-procurements-vendors',
  templateUrl: './create-procurements-vendors.component.html',
  styleUrls: ['./create-procurements-vendors.component.css']
})
export class CreateProcurementsVendorsComponent extends subscribedContainerMixin(formMixin())
  implements OnInit, CanComponentDeactivate {
  @ViewChild('staticTabs', {static: false}) staticTabs: TabsetComponent;
  procurementVendorForm: FormGroup;
  sub: Subscriber<any>[];
  itemCategories$: Observable<any>;
  markTabsWithError: boolean;
  formSubmitted: boolean;

  constructor(
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private procurementService: ProcurementService,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.sub = [];
    this.itemCategories$ = this.procurementService.getItemCategories();
    this.procurementVendorForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      description: [''],
      procurementItemsCategory: this.fb.array([]),
      contactInfo: this.fb.group({
        emails: this.fb.array([this.newEmailField]),
        phones: this.fb.array([this.newPhoneField])
      }),
    });
  }

  addPhone() {
    this.phonesContactInfo.push(this.newEmailField);

  }

  addEmail() {
    this.emailsContactInfo.push(this.newEmailField);

  }

  deleteEmail(i: number) {
    const confirmedDeleteEmail = confirm(`Do you wish to delete email ${i + 1}`);
    if (confirmedDeleteEmail) {
      this.emailsContactInfo.controls.splice(i, 1);
      this.emailsContactInfo.updateValueAndValidity();
    }

  }

  deletePhone(i: number) {

    const confirmedDeletePhone = confirm(`Do you wish to delete phone ${i + 1}`);
    if (confirmedDeletePhone) {
      this.phonesContactInfo.controls.splice(i, 1);
      this.phonesContactInfo.updateValueAndValidity();
    }
  }

  controlAsFormGroup(formGroupName: string): FormGroup {
    return this.procurementVendorForm.get(formGroupName) as FormGroup;
  }

  get emailsContactInfo(): FormArray {
    return this.controlAsFormGroup('contactInfo').get('emails') as FormArray;
  }

  get phonesContactInfo(): FormArray {
    return this.controlAsFormGroup('contactInfo').get('phones') as FormArray;
  }

  get newEmailField() {
    return this.fb.group({
      value: ['', [Validators.email, Validators.required]],
      name: ['']
    });
  }

  get newPhoneField() {
    return this.fb.group({
      value: ['', [Validators.required]],
      name: ['']
    });
  }

  submitProcurementVendorForm() {
    this.submitInProgressSubject$.next(true);
    this.procurementService.createNewVendor(this.procurementVendorForm.value)
      .pipe(takeUntil(this.destroyed$))
      .subscribe({
        next: () => {
          this.submitInProgressSubject$.next(false);
          this.formSubmitted = true;
          this.router.navigate(['/procurements/vendors']).then();
        },
        error: () => this.submitInProgressSubject$.next(false)
      });
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }

  validateForm() {
    this.triggerValidationSubject$.next(true);
      this.markTabsWithError = true;
  }

  get generalInfoHasError() {
    if (this.controlAsFormGroup('name').errors) {
      return true;
    }
    if (this.controlAsFormGroup('address').errors) {
      return true;
    }
    if (this.controlAsFormGroup('description').errors) {
      return true;
    }
    if (this.controlAsFormGroup('procurementItemsCategory').invalid) {
      return true;
    }
    return false;
  }

  get contactInfoHasError() {
    if (this.controlAsFormGroup('contactInfo').invalid) {
      return true;
    }
    return false;
  }

  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.procurementVendorForm.get('procurementItemsCategory') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value === e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.procurementVendorForm.dirty && !this.formSubmitted) {
      return confirm('Your changes are unsaved!! Do you like to exit');
    }
    return true;
  }
}
