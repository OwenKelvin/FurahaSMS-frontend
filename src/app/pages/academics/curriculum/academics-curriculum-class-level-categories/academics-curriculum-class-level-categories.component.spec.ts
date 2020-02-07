import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumClassLevelCategoriesComponent } from './academics-curriculum-class-level-categories.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ViewItemsComponent } from '../../../../components/view-items/view-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../../../../components/chips/chips.component';
import { LoadingBubbleComponent } from '../../../../components/loading-bubble/loading-bubble.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ErrorComponent } from '../../../../components/error/error.component';

describe('AcademicsCurriculumClassLevelCategoriesComponent', () => {
  let component: AcademicsCurriculumClassLevelCategoriesComponent;
  let fixture: ComponentFixture<AcademicsCurriculumClassLevelCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule, HttpClientTestingModule ],
      declarations: [
        AcademicsCurriculumClassLevelCategoriesComponent,
        ViewItemsComponent,
        ChipsComponent,
        LoadingBubbleComponent,
        ErrorComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumClassLevelCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
