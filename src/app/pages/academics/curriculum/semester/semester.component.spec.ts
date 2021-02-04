import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SemesterComponent } from './semester.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppCrudModule } from 'src/app/components/crud/app-crud.module';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';

describe('SemesterComponent', () => {
  let component: SemesterComponent;
  let fixture: ComponentFixture<SemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppViewItemsModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        })
      ],
      declarations: [SemesterComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
