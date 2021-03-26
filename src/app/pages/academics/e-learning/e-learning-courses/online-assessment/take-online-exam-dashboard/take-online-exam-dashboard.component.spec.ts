import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { TakeOnlineExamDashboardComponent } from './take-online-exam-dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from '../../../../../../modules/app-loading-bubble';
import {ReactiveComponentModule} from '@ngrx/component';

describe('TakeOnlineExamDashbpardComponent', () => {
  let component: TakeOnlineExamDashboardComponent;
  let fixture: ComponentFixture<TakeOnlineExamDashboardComponent>;

  beforeEach(waitForAsync( () => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ TakeOnlineExamDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOnlineExamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
