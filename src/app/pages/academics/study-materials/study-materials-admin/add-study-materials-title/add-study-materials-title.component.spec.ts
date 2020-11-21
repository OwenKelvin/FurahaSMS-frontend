import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddStudyMaterialsTitleComponent } from './add-study-materials-title.component';

describe('AddStudyMaterialsTitleComponent', () => {
  let component: AddStudyMaterialsTitleComponent;
  let fixture: ComponentFixture<AddStudyMaterialsTitleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStudyMaterialsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudyMaterialsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
