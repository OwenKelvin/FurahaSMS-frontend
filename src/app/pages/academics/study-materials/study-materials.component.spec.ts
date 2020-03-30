import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialsComponent } from './study-materials.component';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, metaReducers, reducerProvider } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('StudyMaterialsComponent', () => {
  let component: StudyMaterialsComponent;
  let fixture: ComponentFixture<StudyMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        RouterTestingModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [StudyMaterialsComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
