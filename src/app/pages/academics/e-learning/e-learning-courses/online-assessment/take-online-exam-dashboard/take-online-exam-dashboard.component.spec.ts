import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOnlineExamDashboardComponent } from './take-online-exam-dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AppLoadingBubbleModule} from '../../../../../../modules/app-loading-bubble';

describe('TakeOnlineExamDashbpardComponent', () => {
  let component: TakeOnlineExamDashboardComponent;
  let fixture: ComponentFixture<TakeOnlineExamDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ TakeOnlineExamDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOnlineExamDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
