import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherComponent } from './view-teacher.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';

describe('ViewTeacherComponent', () => {
  let component: ViewTeacherComponent;
  let fixture: ComponentFixture<ViewTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        AppLoadingBubbleModule,
        AppUserProfileModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ViewTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
