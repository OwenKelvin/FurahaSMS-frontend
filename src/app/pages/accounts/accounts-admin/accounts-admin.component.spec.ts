import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAdminComponent } from './accounts-admin.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLinksModule } from 'src/app/shared/links/links.module';
import { StoreModule } from '@ngrx/store';
import { REDUCER_TOKEN, reducerProvider, metaReducers } from 'src/app/store/reducers';

describe('AccountsAdminComponent', () => {
  let component: AccountsAdminComponent;
  let fixture: ComponentFixture<AccountsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppLinksModule,
        RouterTestingModule,
        AppLinksModule,
        StoreModule.forRoot(REDUCER_TOKEN, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          }
        }),
      ],
      declarations: [AccountsAdminComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
