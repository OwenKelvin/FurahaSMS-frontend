import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import {QuestionViewComponent} from './question-view.component';
import {Number2AlphabetModule} from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';
import {MathModule} from '../../../../../shared/math/math.module';

describe('QuestionViewComponent', () => {
  let component: QuestionViewComponent;
  let fixture: ComponentFixture<QuestionViewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [Number2AlphabetModule, MathModule ],
      declarations: [QuestionViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionViewComponent);
    component = fixture.componentInstance;
    component.question = {};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
