import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './../header/header.component';
import { FooterComponent } from './../footer/footer.component';
import { SidebarComponent } from './../sidebar/sidebar.component';
import { UserButtonComponent } from './../user-button/user-button.component';
import { MenuSearchComponent } from './../menu-search/menu-search.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        HttpClientTestingModule
      ],
      declarations: [
        SidebarComponent,
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        MenuSearchComponent,
        UserButtonComponent,
        BreadcrumbComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
