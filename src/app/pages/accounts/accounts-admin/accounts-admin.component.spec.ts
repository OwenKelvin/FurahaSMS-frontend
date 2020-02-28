import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAdminComponent } from './accounts-admin.component';

describe('AccountsAdminComponent', () => {
  let component: AccountsAdminComponent;
  let fixture: ComponentFixture<AccountsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsAdminComponent ]
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
