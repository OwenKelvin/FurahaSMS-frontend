import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryAdminTagsComponent } from './library-admin-tags.component';
import { LibraryModule } from '../../library.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('LibraryAdminTagsComponent', () => {
  let component: LibraryAdminTagsComponent;
  let fixture: ComponentFixture<LibraryAdminTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('library', reducers),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        RouterTestingModule,
        LibraryModule
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryAdminTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
