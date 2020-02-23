import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionViewComponent } from './question-view.component';
import { Number2AlphabetModule } from 'src/app/shared/number-2-alphabet/number-2-alphabet.module';

describe('QuestionViewComponent', () => {
  let component: QuestionViewComponent;
  let fixture: ComponentFixture<QuestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Number2AlphabetModule],
      declarations: [ QuestionViewComponent ]
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
