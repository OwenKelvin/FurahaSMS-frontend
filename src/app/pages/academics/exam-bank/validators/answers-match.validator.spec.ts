import { answersMatchValidator } from './answers-match.validator';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

describe('answersMatchValidator', () => {
  let group: FormGroup;
  beforeEach(() => {
    group = new FormGroup({
      multipleAnswers: new FormControl(false),
      multipleChoices: new FormControl(false),
      answers: new FormArray([
        new FormGroup({ isCorrect: new FormControl(false) }),
        new FormGroup({ isCorrect: new FormControl(false) }),
        new FormGroup({ isCorrect: new FormControl(false) })
      ])
    });
  });

  it('should return error if no choice is selected', () => {
    expect(answersMatchValidator(group)).toBeTruthy();
  });

  it('should return error if no choice is selected', () => {
    group.get('answers')?.setValue([{ isCorrect: true }, { isCorrect: false }, { isCorrect: false }]);
    expect(answersMatchValidator(group)).toBeTruthy();
  });

  it('should return error if no choice is selected', () => {
    group.get('answers')?.setValue([{ isCorrect: true }, { isCorrect: true }, { isCorrect: false }]);
    group.get('multipleChoices')?.setValue(true);
    group.get('multipleAnswers')?.setValue(false);
    expect(answersMatchValidator(group)).toBeTruthy();
  });

  it('should return error if no choice is selected', () => {
    group.get('answers')?.setValue([{ isCorrect: true }, { isCorrect: true }, { isCorrect: false }]);
    group.get('multipleAnswers')?.setValue(true);
    group.get('multipleChoices')?.setValue(true);
    expect(answersMatchValidator(group)).toBeFalsy();
  });

});
