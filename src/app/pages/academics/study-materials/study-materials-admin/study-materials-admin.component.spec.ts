import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudyMaterialsAdminComponent } from './study-materials-admin.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudyMaterialsAdminComponent', () => {
  let component: StudyMaterialsAdminComponent;
  let fixture: ComponentFixture<StudyMaterialsAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ StudyMaterialsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
