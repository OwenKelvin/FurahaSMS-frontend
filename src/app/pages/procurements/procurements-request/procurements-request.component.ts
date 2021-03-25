import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {ProcurementService} from 'src/app/services/procurement.service';
import {takeUntil} from 'rxjs/operators';
import {subscribedContainerMixin} from '../../../shared/mixins/subscribed-container.mixin';
import {formMixin} from '../../../shared/mixins/form.mixin';

@Component({
  selector: 'app-procurements-request',
  templateUrl: './procurements-request.component.html',
  styleUrls: ['./procurements-request.component.css']
})
export class ProcurementsRequestComponent extends subscribedContainerMixin(formMixin()) implements OnInit {
  @Input() requestId: number;
  procurementRequestForm: FormGroup = this.fb.group({
    id: [0],
    name: ['', [Validators.required]],
    category: [null, [Validators.required]],
    description: [''],
    quantity: ['', [Validators.required, Validators.pattern('[0-9]+')]],
  });
  formSubmitted: boolean;
  loadingContents: boolean;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private procurementService: ProcurementService
  ) {
    super();
  }

  get idControl() {
    return this.procurementRequestForm.get('id') as FormControl;
  }

  ngOnInit() {
    if (this.requestId) {
      this.loadingContents = true;
      this.procurementService.getProcurementRequestWithId(this.requestId)
        .pipe(takeUntil(this.destroyed$))
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
  }

  submitProcurementRequestForm() {
    this.submitInProgressSubject$.next(true);
    if (this.procurementRequestForm.valid) {
      this.procurementService.saveProcurementRequest(this.procurementRequestForm.value)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(res => {
          this.submitInProgressSubject$.next(false);
          this.formSubmitted = true;
          this.router.navigate(['/procurements', 'requests', res.data.id, 'view']).then();
        }, () => {
          this.formSubmitted = true;
          this.submitInProgressSubject$.next(false);
        });
    } else {
      this.triggerValidationSubject$.next(true);
    }
  }
}
