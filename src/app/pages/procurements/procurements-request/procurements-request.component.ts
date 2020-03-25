import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { loadToastShowsSuccess } from 'src/app/store/actions/toast-show.actions';
import { Router } from '@angular/router';
import { ProcurementService } from 'src/app/services/procurement.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-procurements-request',
  templateUrl: './procurements-request.component.html',
  styleUrls: ['./procurements-request.component.css']
})
export class ProcurementsRequestComponent implements OnInit, OnDestroy {
  @Input() requestId: number;
  procurementRequestForm: FormGroup;
  triggerValidation: boolean;
  isSubmitting: boolean;
  formSubmitted: boolean;
  submitError: boolean;
  showErrorMessage: boolean;
  loadingContents: boolean;
  componentIsActive: boolean;
  constructor(
    private store: Store<AppState>,
    private fb: FormBuilder,
    private router: Router,
    private procurementService: ProcurementService
  ) { }
  
  get idControl() {
    return this.procurementRequestForm.get("id") as FormControl;
  }

  ngOnInit() {
    this.componentIsActive = true;
    this.triggerValidation = true;
    this.procurementRequestForm = this.fb.group({
      id: [0],
      name: ['', [Validators.required]],
      category: [null, [Validators.required]],
      description: [''],
      quantity: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    });
    if (this.requestId) {
      this.loadingContents = true;
      this.procurementService.getProcurementRequestWithId(this.requestId)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(res => {
        this.procurementRequestForm.setValue({
          id: res.id,
          name: res.name,
          category: res.procurement_items_category_id,
          quantity: res.quantity_description,
          description: res.description,
        });
        this.loadingContents = false;
      });
    }
    
    console.log(this.idControl)
  }

  submitProcurementRequestForm() {
    this.isSubmitting = true;
    if (this.procurementRequestForm.valid) {
      this.procurementService.saveProcurementRequest(this.procurementRequestForm.value)
        .pipe(takeWhile(() => this.componentIsActive))
        .subscribe(res => {
        this.store.dispatch(loadToastShowsSuccess({
          showMessage: true, toastBody: res.message, toastHeader: 'Successful', toastTime: 'just now'
        }));
        this.isSubmitting = false;
        this.formSubmitted = true;
        this.router.navigate(['/procurements', 'requests', res.data.id, 'view']);
      }, () => {
        this.formSubmitted = true;
        this.isSubmitting = false;
      });
    } else {
      this.triggerValidation = !this.triggerValidation;
    }
  }
  
  ngOnDestroy() {
    this.componentIsActive = false;
  }

}
