import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialsAdminComponent } from './study-materials-admin.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudyMaterialsAdminComponent', () => {
  let component: StudyMaterialsAdminComponent;
  let fixture: ComponentFixture<StudyMaterialsAdminComponent>;

  beforeEach(async(() => {
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
