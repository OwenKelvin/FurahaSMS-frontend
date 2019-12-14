import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumClassLevelsComponent } from './academics-curriculum-class-levels.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ViewItemsComponent } from '../view-items/view-items.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../chips/chips.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';

describe('AcademicsCurriculumClassLevelsComponent', () => {
  let component: AcademicsCurriculumClassLevelsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumClassLevelsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule, RouterTestingModule ],
      declarations: [ AcademicsCurriculumClassLevelsComponent, ViewItemsComponent, ChipsComponent, LoadingBubbleComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumClassLevelsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
