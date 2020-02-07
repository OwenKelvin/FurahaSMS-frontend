import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUnitComponent } from './view-unit.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { AcademicsModule } from '../../academics.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('ViewUnitComponent', () => {
  let component: ViewUnitComponent;
  let fixture: ComponentFixture<ViewUnitComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        AcademicsModule,
        HttpClientTestingModule,
        RouterTestingModule],
      declarations: [ ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUnitComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
