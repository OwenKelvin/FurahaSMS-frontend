import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassLevelUnitLevelAllocationComponent} from './class-level-unit-level-allocation.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppLoadingBubbleModule} from '../../../../modules/app-loading-bubble';

describe('ClassLevelUnitLevelAllocationComponent', () => {
  let component: ClassLevelUnitLevelAllocationComponent;
  let fixture: ComponentFixture<ClassLevelUnitLevelAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppLoadingBubbleModule],
      declarations: [ClassLevelUnitLevelAllocationComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLevelUnitLevelAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
