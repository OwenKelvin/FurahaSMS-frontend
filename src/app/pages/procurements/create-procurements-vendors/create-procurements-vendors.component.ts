import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ProcurementService } from 'src/app/services/procurement.service';
import { Observable, Subscriber } from 'rxjs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';
import { Router } from '@angular/router';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-create-procurements-vendors',
  templateUrl: './create-procurements-vendors.component.html',
  styleUrls: ['./create-procurements-vendors.component.css']
})
export class CreateProcurementsVendorsComponent implements OnInit, CanComponentDeactivate, OnDestroy {
  procurementVendorForm: FormGroup;
  sub: Subscriber<any>[];
  itemCategories$: Observable<any>;
  triggerValidation: boolean;
  isSubmitting: boolean;
  @ViewChild('staticTabs', { static: false }) staticTabs: TabsetComponent;
  markTabsWithError: boolean;
  formSubmitted: boolean;
  componentIsActive: boolean;
  constructor(
    private store: Store<fromStore.AppState>,
    private fb: FormBuilder,
    private procurementService: ProcurementService,
    private router: Router
  ) { }

  ngOnInit() {
    this.componentIsActive = true;
    this.isSubmitting = false;
    this.sub = [];
    this.itemCategories$ = this.procurementService.getItemCaterories();
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
  get emailsContactInfo(): FormArray {
    return this.procurementVendorForm.get('contactInfo').get('emails') as FormArray;
  }
  get phonesContactInfo(): FormArray {
    return this.procurementVendorForm.get('contactInfo').get('phones') as FormArray;
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
    this.isSubmitting = true;
    this.procurementService.createNewVendor(this.procurementVendorForm.value)
      .pipe(takeWhile(() => this.componentIsActive))
      .subscribe(res => {
      this.isSubmitting = false;
      this.formSubmitted = true;
      this.router.navigate(['/procurements/vendors']);
    }, err => {
        this.isSubmitting = false;
    });
  }
  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
  validateForm() {
    this.triggerValidation = !this.triggerValidation,
      this.markTabsWithError = true;
  }
  get generalInfoHasError() {
    if (this.procurementVendorForm.get('name').errors) {
      return true;
    }
    if (this.procurementVendorForm.get('address').errors) {
      return true;
    }
    if (this.procurementVendorForm.get('description').errors) {
      return true;
    }
    if (this.procurementVendorForm.get('procurementItemsCategory').invalid) {
      return true;
    }
    return false;
  }
  get contactInfoHasError() {
    if (this.procurementVendorForm.get('contactInfo').invalid) {
      return true;
    }
    return false;
  }
  onCheckboxChange(e) {
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
  ngOnDestroy() {
    this.componentIsActive = false;
  }
}
