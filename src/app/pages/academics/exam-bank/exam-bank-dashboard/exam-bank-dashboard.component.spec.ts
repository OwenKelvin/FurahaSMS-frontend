import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamBankDashboardComponent } from './exam-bank-dashboard.component';
import { AppDashboardLinksModule } from 'src/app/modules/app-dashboard-links';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('ExamBankDashboardComponent', () => {
  let component: ExamBankDashboardComponent;
  let fixture: ComponentFixture<ExamBankDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppDashboardLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })],
      declarations: [ExamBankDashboardComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
