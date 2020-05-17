import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameItemComponent } from './name-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/components/input/app-input.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { appFeatureKey, reducers } from 'src/app/store/reducers/app.reducer';
import { AppValidateSubmitButtonsModule } from '../../validate-submit-buttons/validate-submit-buttons.module';

describe('NameItemComponent', () => {
  let component: NameItemComponent;
  let fixture: ComponentFixture<NameItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppValidateSubmitButtonsModule,
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(appFeatureKey, reducers)
      ],
      declarations: [NameItemComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
