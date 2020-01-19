import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumUnitCategoriesComponent } from './academics-curriculum-unit-categories.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ViewItemsComponent } from '../../../components/view-items/view-items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../../../components/chips/chips.component';
import { LoadingBubbleComponent } from '../../../components/loading-bubble/loading-bubble.component';
import { ErrorComponent } from '../../../components/error/error.component';

describe('AcademicsCurriculumUnitCategoriesComponent', () => {
  let component: AcademicsCurriculumUnitCategoriesComponent;
  let fixture: ComponentFixture<AcademicsCurriculumUnitCategoriesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule, RouterTestingModule ],
      declarations: [
        AcademicsCurriculumUnitCategoriesComponent,
        ViewItemsComponent,
        ChipsComponent,
        LoadingBubbleComponent,
        ErrorComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumUnitCategoriesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
