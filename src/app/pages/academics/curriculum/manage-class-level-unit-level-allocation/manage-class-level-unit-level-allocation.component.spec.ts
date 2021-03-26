import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {ManageClassLevelUnitLevelAllocationComponent} from './manage-class-level-unit-level-allocation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';
import {ReactiveComponentModule} from '@ngrx/component';

describe('ManageClassLevelUnitLevelAllocationComponent', () => {
  let component: ManageClassLevelUnitLevelAllocationComponent;
  let fixture: ComponentFixture<ManageClassLevelUnitLevelAllocationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule, FormsModule,
        AppLoadingBubbleModule,
        ReactiveComponentModule
      ],
      declarations: [ManageClassLevelUnitLevelAllocationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassLevelUnitLevelAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
