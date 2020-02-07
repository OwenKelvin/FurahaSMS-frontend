import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitCategoryComponent } from './view-unit-category.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewUnitCategoryComponent', () => {
  let component: ViewUnitCategoryComponent;
  let fixture: ComponentFixture<ViewUnitCategoryComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}),
        AppLoadingBubbleModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ ViewUnitCategoryComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnitCategoryComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
