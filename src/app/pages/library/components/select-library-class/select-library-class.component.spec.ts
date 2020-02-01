import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLibraryClassComponent } from './select-library-class.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryAdminModule } from '../../library-admin/library-admin.module';

describe('SelectLibraryClassComponent', () => {
  let component: SelectLibraryClassComponent;
  let fixture: ComponentFixture<SelectLibraryClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('library', reducers),
        EffectsModule.forRoot([]),
        HttpClientTestingModule,
        LibraryAdminModule
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibraryClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
