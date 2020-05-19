import { Component, OnInit } from '@angular/core';
import { modalMixin } from 'src/app/shared/mixins/modal.mixin';
import { submitMixin } from 'src/app/shared/mixins/submit-spinner.mixin';
import { Store } from '@ngrx/store';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-create-timing-template',
  templateUrl: './create-timing-template.component.html',
  styleUrls: ['./create-timing-template.component.css']
})
export class CreateTimingTemplateComponent extends submitMixin(modalMixin()) implements OnInit {

  constructor(modal: BsModalService, store: Store) { super(modal, store); }

  ngOnInit(): void {
    
  }
  
  saveTimings() {
    this.submitInProgressSubject$.next(true)
  }

}
