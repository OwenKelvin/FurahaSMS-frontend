import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialsComponent } from './study-materials.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';

describe('StudyMaterialsComponent', () => {
  let component: StudyMaterialsComponent;
  let fixture: ComponentFixture<StudyMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule
      ],
      declarations: [ StudyMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
