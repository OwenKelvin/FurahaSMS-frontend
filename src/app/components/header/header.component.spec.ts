import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MenuSearchComponent } from './../menu-search/menu-search.component';
import { UserButtonComponent } from './../user-button/user-button.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, StoreModule.forRoot({}) ],
      declarations: [ HeaderComponent, MenuSearchComponent, UserButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
