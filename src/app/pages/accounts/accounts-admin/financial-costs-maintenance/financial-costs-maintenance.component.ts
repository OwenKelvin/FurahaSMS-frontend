import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FinancialCostsService } from '../../services/financial-costs.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-financial-costs-maintenance',
  templateUrl: './financial-costs-maintenance.component.html',
  styleUrls: ['./financial-costs-maintenance.component.css']
})
export class FinancialCostsMaintenanceComponent implements OnInit {
  modalRef: BsModalRef;
  financialCosts$: Observable<any[]>;
  financialCosts: any[];
  financialCostEditForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  editedIndex: number;
  isLoading: boolean;
  deleting: any;
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private financialCostsService: FinancialCostsService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.deleting = [false];
    this.financialCosts = [];
    this.resetEditForm();
    this.financialCosts$ = this.financialCostsService.getAll()
      .pipe(
        map(item => (
          item.map(({ id, name, costItems }) => ({
            id,
            name,
            costItems: costItems.map(({ id, name }) => ({ id, name }))
          }))
        ))
      );
    this.isLoading = true;
    this.financialCosts$.subscribe(financialCosts => {
      this.financialCosts = financialCosts;

      // TODO-me remove below
      // this.financialCosts = [{ "id": 1, "name": "Transport", "costItems": [{ "id": 1, "name": "Morning Transport" }, { "id": 2, "name": "Evening Transport" }] }, { "id": 2, "name": "Building and Construction", "costItems": [{ "id": 3, "name": "New Dining Hall Contribution" }] }, { "id": 3, "name": "Meals", "costItems": [{ "id": 4, "name": "Tea break snack" }, { "id": 5, "name": "Lunch" }, { "id": 6, "name": "Evening Snack" }] }, { "id": 4, "name": "Transport", "costItems": [{ "id": 7, "name": "Morning Transport" }, { "id": 8, "name": "Evening Transport" }] }, { "id": 5, "name": "Building and Construction", "costItems": [{ "id": 9, "name": "New Dining Hall Contribution" }] }, { "id": 6, "name": "Meals", "costItems": [{ "id": 10, "name": "Tea break snack" }, { "id": 11, "name": "Lunch" }, { "id": 12, "name": "Evening Snack" }] }];

      this.isLoading = false;
    });
  }
  resetEditForm() {
    this.financialCostEditForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      costItems: this.fb.array([]),
    });
    this.addCostItem();
  }

  openModal(template: TemplateRef<any>, j: number) {
    this.resetEditForm();
    this.editedIndex = -1;
    if (j || j === 0) {
      this.editedIndex = j;
      this.deleteCostItem(0);
      this.financialCosts[j].costItems.forEach(() => this.addCostItem());
      this.financialCostEditForm.setValue(this.financialCosts[j]);

    }
    this.modalRef = this.modalService.show(template);
  }
  hideModal() {
    this.modalRef.hide();
    this.resetEditForm();

  }
  get costItems(): FormArray {
    return this.financialCostEditForm.get('costItems') as FormArray;
  }
  addCostItem() {
    this.costItems.push(this.fb.group({
      id: [null],
      name: ['', Validators.required]
    }));
  }
  deleteCostItem(i) {
    this.costItems.controls.splice(i, 1);
    this.costItems.updateValueAndValidity();
  }
  submitCostEditForm() {
    if (this.financialCostEditForm.valid) {
      if (this.editedIndex > -1) {
        this.financialCosts[this.editedIndex] = this.financialCostEditForm.value;
        console.log(this.financialCostEditForm.value);

      } else {
        this.financialCosts.push(this.financialCostEditForm.value);
      }
      this.hideModal();
    } else {
      this.triggerValidation = !this.triggerValidation;
    }


  }
  submitFinancialCosts() {
    this.isSubmitting = true;
    this.financialCostsService.save(this.financialCosts)
      .pipe(map(res => res as any))
      .subscribe(res => {
        this.isSubmitting = false;
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true,
          toastBody: res.message,
          toastHeader: 'Success!',
          toastTime: 'Just now'
        }));


      });
  }
  deleteItem(j) {
    const confirmedDeletion = confirm(`Are you sure you wish to delete cost item "${this.financialCosts[j].name}" `);

    if (confirmedDeletion) {
      this.deleting[j] = true;
      this.financialCostsService.destroy(this.financialCosts[j].id).subscribe(
        res => {
          this.deleting[j] = false;
          this.financialCosts.splice(j, 1);
          this.store.dispatch(loadToastShowsSuccess({
            showMessage: true,
            toastBody: res.message,
            toastHeader: 'Success!',
            toastTime: 'Just now'
          }));
        }, err => this.deleting[j] = false
      );


    }
  }
}
