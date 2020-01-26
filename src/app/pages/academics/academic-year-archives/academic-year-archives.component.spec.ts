import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicYearArchivesComponent } from './academic-year-archives.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AcademicYearArchivesComponent', () => {
  let component: AcademicYearArchivesComponent;
  let fixture: ComponentFixture<AcademicYearArchivesComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [ AcademicYearArchivesComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicYearArchivesComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
