import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLevelUnitLevelAllocationComponent } from './class-level-unit-level-allocation.component';

describe('ClassLevelUnitLevelAllocationComponent', () => {
  let component: ClassLevelUnitLevelAllocationComponent;
  let fixture: ComponentFixture<ClassLevelUnitLevelAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassLevelUnitLevelAllocationComponent ]
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
