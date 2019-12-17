import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewClassLevelComponent } from './view-class-level.component';
import { Store, StoreModule } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { ViewComponent } from '../view/view.component';
import { ChipsComponent } from '../chips/chips.component';
import { DescriptionComponent } from '../description/description.component';
import { LoadingBubbleComponent } from '../loading-bubble/loading-bubble.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewClassLevelComponent', () => {
  let component: ViewClassLevelComponent;
  let fixture: ComponentFixture<ViewClassLevelComponent>;
  let store: Store<AppState>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}), HttpClientTestingModule ],
      declarations: [
        ViewClassLevelComponent,
        ViewComponent,
        ChipsComponent,
        DescriptionComponent,
        LoadingBubbleComponent
      ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewClassLevelComponent);
    component = fixture.componentInstance;
    store = TestBed.get<Store<AppState>>(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
