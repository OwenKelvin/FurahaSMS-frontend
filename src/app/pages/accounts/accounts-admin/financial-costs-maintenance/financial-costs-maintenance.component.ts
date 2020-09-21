import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FinancialCostsService} from '../../services/financial-costs.service';
import {Observable} from 'rxjs';
import {map, takeUntil, tap} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../../shared/mixins/subscribed-container.mixin';

@Component({
  selector: 'app-financial-costs-maintenance',
  templateUrl: './financial-costs-maintenance.component.html',
  styleUrls: ['./financial-costs-maintenance.component.css']
})
export class FinancialCostsMaintenanceComponent extends subscribedContainerMixin() implements OnInit {
  modalRef: BsModalRef;
  financialCosts$: Observable<any[]>;
  financialCosts: any[] = [];
  financialCostEditForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  editedIndex: number;
  isLoading = true;
  deleting = [false];

  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private financialCostsService: FinancialCostsService,
  ) {
    super();
  }

  ngOnInit() {
    this.resetEditForm();
    this.financialCosts$ = this.financialCostsService.all$.pipe(
      tap(res => console.log({res})),
      map(item => (
        item.map(({id, name, cost_items:costItems}: any) => ({
          id, name, costItems: costItems.map(({id: costId, name: costName}: any) => ({id: costId, name: costName}))
        }))
      )),
      tap((financialCosts) => this.financialCosts = financialCosts)
    );
  }

  resetEditForm() {
    this.financialCostEditForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      costItems: this.fb.array([]),
    });
    this.addCostItem();
  }

  openModal(template: TemplateRef<any>, j?: number) {
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

  deleteCostItem(i: number) {
    this.costItems.controls.splice(i, 1);
    this.costItems.updateValueAndValidity();
  }

  submitCostEditForm() {
    if (this.financialCostEditForm.valid) {
      if (this.editedIndex > -1) {
        this.financialCosts[this.editedIndex] = this.financialCostEditForm.value;

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
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.isSubmitting = false;
      });
  }

  deleteItem(j: number) {
    const confirmedDeletion = confirm(`Are you sure you wish to delete cost item "${this.financialCosts[j].name}" `);

    if (confirmedDeletion) {
      this.deleting[j] = true;
      this.financialCostsService.destroy(this.financialCosts[j].id)
        .pipe(takeUntil(this.destroyed$))
        .subscribe({
          next: () => {
            this.deleting[j] = false;
            this.financialCosts.splice(j, 1);
          },
          error: () => this.deleting[j] = false
        });


    }
  }
}
