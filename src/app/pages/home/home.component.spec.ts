import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {FullWithCenterComponent} from '../../components/full-with-center/full-with-center.component';
import {AppStarLabelRequiredModule} from '../../components/label-star-required/app-star-label-required';
import {FormErrorsModule} from '../../shared/form-errors/form-errors.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStarLabelRequiredModule,
        FormErrorsModule
      ],
      declarations: [HomeComponent, FullWithCenterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Furaha School Management System');
  });
});
