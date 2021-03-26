import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {StudentAdmissionsEditComponent} from './student-admissions-edit.component';
import {Store, StoreModule} from '@ngrx/store';
import {AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import {StudentSearchComponent} from '../../../../components/student-search/student-search.component';
import {StudentsRecentlyCreatedComponent} from '../students-recently-created/students-recently-created.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppInputModule} from 'src/app/components/input/app-input.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {ReactiveComponentModule} from '@ngrx/component';

describe('StudentAdmissionsEditComponent', () => {
  let component: StudentAdmissionsEditComponent;
  let fixture: ComponentFixture<StudentAdmissionsEditComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(REDUCER_TOKEN, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true,
        }
      }), AppLoadingBubbleModule, RouterTestingModule, HttpClientTestingModule,
        AppInputModule,
        FormsModule,
        ReactiveFormsModule,
        TypeaheadModule.forRoot(),
        ReactiveComponentModule
      ],
      declarations: [StudentAdmissionsEditComponent, StudentSearchComponent, StudentsRecentlyCreatedComponent],
      providers: [reducerProvider]
    });

    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAdmissionsEditComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
