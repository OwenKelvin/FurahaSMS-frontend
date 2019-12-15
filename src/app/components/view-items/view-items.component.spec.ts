import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewItemsComponent } from './view-items.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { RouterTestingModule } from '@angular/router/testing';
import { ChipsComponent } from '../chips/chips.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { of } from 'rxjs';
import { ErrorComponent } from '../error/error.component';

describe('ViewItemsComponent', () => {
  let component: ViewItemsComponent;
  let fixture: ComponentFixture<ViewItemsComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), RouterTestingModule ],
      declarations: [ ViewItemsComponent, ChipsComponent, LoadingBubbleComponent, ErrorComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewItemsComponent);
    component = fixture.componentInstance;
    component.itemService = { getAll: () => of([{id: 1}]) };
    component.viewItemUrl = () => { };
    component.viewItemUrl = () => { };
    component.editItemUrl = () => { };
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
