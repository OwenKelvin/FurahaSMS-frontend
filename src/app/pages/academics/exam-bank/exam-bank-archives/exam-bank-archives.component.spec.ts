import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ExamBankArchivesComponent} from './exam-bank-archives.component';
import {AppLoadingBubbleModule} from 'src/app/modules/app-loading-bubble';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ExamBankArchivesComponent', () => {
  let component: ExamBankArchivesComponent;
  let fixture: ComponentFixture<ExamBankArchivesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLoadingBubbleModule,
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveComponentModule
      ],
      declarations: [ExamBankArchivesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamBankArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
