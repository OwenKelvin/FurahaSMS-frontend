import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LibraryAdminPublisherItemComponent } from './library-admin-publisher-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import {libraryFeatureKey, reducers} from '../../../store/reducers';

describe('LibraryAdminPublisherItemComponent', () => {
  let component: LibraryAdminPublisherItemComponent;
  let fixture: ComponentFixture<LibraryAdminPublisherItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
        StoreModule.forFeature(libraryFeatureKey, reducers),
        RouterTestingModule
      ],
      declarations: [LibraryAdminPublisherItemComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminPublisherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
