import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSemesterComponent } from './view-semester.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ViewSemesterComponent', () => {
  let component: ViewSemesterComponent;
  let fixture: ComponentFixture<ViewSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule,
        HttpClientTestingModule
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
