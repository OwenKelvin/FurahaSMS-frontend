import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnitComponent } from './edit-unit.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState, REDUCER_TOKEN, metaReducers, reducerProvider} from 'src/app/store/reducers';
import { AcademicsModule } from '../../academics.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabErrorStateModule } from 'src/app/modules/app-tab-error.module';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgSelectModule } from '@ng-select/ng-select';
import { ErrorModule } from 'src/app/components/error/error.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('EditUnitComponent', () => {
  let component: EditUnitComponent;
  let fixture: ComponentFixture<EditUnitComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        AcademicsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TabErrorStateModule,
        AppInputModule,
        TabsModule.forRoot(),
        NgSelectModule,
        ErrorModule,
        AppLoadingBubbleModule
      ],
      declarations: [EditUnitComponent],
      providers: [reducerProvider]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnitComponent);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
