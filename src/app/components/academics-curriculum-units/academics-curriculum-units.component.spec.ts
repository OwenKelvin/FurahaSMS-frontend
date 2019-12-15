import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicsCurriculumUnitsComponent } from './academics-curriculum-units.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ViewItemsComponent } from '../view-items/view-items.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../chips/chips.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicsCurriculumUnitsComponent', () => {
  let component: AcademicsCurriculumUnitsComponent;
  let fixture: ComponentFixture<AcademicsCurriculumUnitsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AcademicsCurriculumUnitsComponent,
        ViewItemsComponent,
        LoadingBubbleComponent,
        ChipsComponent]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicsCurriculumUnitsComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
