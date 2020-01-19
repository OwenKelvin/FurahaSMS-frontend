import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAuthorComponent } from './edit-author.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateAuthorComponent } from '../create-author/create-author.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppInputModule } from 'src/app/modules/app-input.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('EditAuthorComponent', () => {
  let component: EditAuthorComponent;
  let fixture: ComponentFixture<EditAuthorComponent>;
  let store: Store<any>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        AppInputModule,
        AppLoadingBubbleModule
      ],
      declarations: [EditAuthorComponent, CreateAuthorComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAuthorComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
