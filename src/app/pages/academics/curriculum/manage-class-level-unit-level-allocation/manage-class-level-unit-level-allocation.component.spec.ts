import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassLevelUnitLevelAllocationComponent } from './manage-class-level-unit-level-allocation.component';

describe('ManageClassLevelUnitLevelAllocationComponent', () => {
  let component: ManageClassLevelUnitLevelAllocationComponent;
  let fixture: ComponentFixture<ManageClassLevelUnitLevelAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageClassLevelUnitLevelAllocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassLevelUnitLevelAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
