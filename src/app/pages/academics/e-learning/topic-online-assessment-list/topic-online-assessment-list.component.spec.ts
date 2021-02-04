import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TopicOnlineAssessmentListComponent} from './topic-online-assessment-list.component';
import {ModalModule} from 'ngx-bootstrap/modal';
import {RouterTestingModule} from '@angular/router/testing';
import {StoreModule} from '@ngrx/store';
import {metaReducers, REDUCER_TOKEN, reducerProvider} from '../../../../store/reducers';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('TopicOnlineAssessmentListComponent', () => {
  let component: TopicOnlineAssessmentListComponent;
  let fixture: ComponentFixture<TopicOnlineAssessmentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ModalModule.forRoot(),
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        HttpClientTestingModule
      ],
      declarations: [TopicOnlineAssessmentListComponent],
      providers: [reducerProvider]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicOnlineAssessmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
