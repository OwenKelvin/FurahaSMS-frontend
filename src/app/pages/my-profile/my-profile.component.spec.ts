import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileComponent } from './my-profile.component';
import { AppUserProfileModule } from 'src/app/components/user-profile/user-profile.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';

describe('MyProfileComponent', () => {
  let component: MyProfileComponent;
  let fixture: ComponentFixture<MyProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppUserProfileModule,
        HttpClientTestingModule,
        AppLoadingBubbleModule
      ],
      declarations: [ MyProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
