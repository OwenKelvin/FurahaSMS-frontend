import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLibrarySubClassComponent } from './select-library-sub-class.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibraryAdminModule } from '../../library-admin/library-admin.module';

describe('SelectLibrarySubClassComponent', () => {
  let component: SelectLibrarySubClassComponent;
  let fixture: ComponentFixture<SelectLibrarySubClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        LibraryAdminModule,
        HttpClientTestingModule
      ],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLibrarySubClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
