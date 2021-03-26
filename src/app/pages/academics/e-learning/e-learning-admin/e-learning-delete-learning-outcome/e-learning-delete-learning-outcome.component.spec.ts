import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ELearningDeleteLearningOutcomeComponent} from './e-learning-delete-learning-outcome.component';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../../store/reducers';
import {ModalModule} from 'ngx-bootstrap/modal';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ELearningDeleteLearningOutcomeComponent', () => {
  let component: ELearningDeleteLearningOutcomeComponent;
  let fixture: ComponentFixture<ELearningDeleteLearningOutcomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        ModalModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        ReactiveComponentModule
      ],
      declarations: [ELearningDeleteLearningOutcomeComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningDeleteLearningOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
