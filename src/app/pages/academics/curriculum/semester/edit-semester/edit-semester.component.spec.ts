import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditSemesterComponent } from './edit-semester.component';
import { ErrorModule } from 'src/app/components/error/error.module';
import { RouterTestingModule } from '@angular/router/testing';
import { reducerProvider } from 'src/app/store/reducers';

describe('EditSemesterComponent', () => {
  let component: EditSemesterComponent;
  let fixture: ComponentFixture<EditSemesterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ErrorModule],
      declarations: [EditSemesterComponent],
      providers: [reducerProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
