import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminPublishersComponent } from './library-admin-publishers.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryAdminPublishersComponent', () => {
  let component: LibraryAdminPublishersComponent;
  let fixture: ComponentFixture<LibraryAdminPublishersComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        AppViewItemsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LibraryAdminPublishersComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminPublishersComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
