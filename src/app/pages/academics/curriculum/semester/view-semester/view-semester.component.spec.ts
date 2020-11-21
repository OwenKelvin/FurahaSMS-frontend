import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewSemesterComponent } from './view-semester.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppViewItemsModule } from 'src/app/modules/app-view-items.module';
import { AppDescriptionModule } from 'src/app/modules/app-description.module';
import { AppLoadingBubbleModule } from 'src/app/modules/app-loading-bubble';
import { AppChipsModule } from 'src/app/modules/app-chip.module';

describe('ViewSemesterComponent', () => {
  let component: ViewSemesterComponent;
  let fixture: ComponentFixture<ViewSemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule,
        HttpClientTestingModule,
        AppViewItemsModule,
        AppChipsModule,
        AppLoadingBubbleModule,
        AppDescriptionModule
      ],
      declarations: [ViewSemesterComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
