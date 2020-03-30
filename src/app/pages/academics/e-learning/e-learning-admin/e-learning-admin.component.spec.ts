import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ELearningAdminComponent } from './e-learning-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterTestingModule } from '@angular/router/testing';

describe('ELearningAdminComponent', () => {
  let component: ELearningAdminComponent;
  let fixture: ComponentFixture<ELearningAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule,
        RouterTestingModule
      ],
      declarations: [ ELearningAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ELearningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
