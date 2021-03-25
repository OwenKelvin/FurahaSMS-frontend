import { FormGroup } from '@angular/forms';

export const answersMatchValidator = (group: FormGroup): { answersMismatch: any } | null => {
  const multipleAnswers = group.get('multipleAnswers')?.value;
  const multipleChoices = group.get('multipleChoices')?.value;
  const answers = group.get('answers')?.value as any[];
  if ((answers.every(({ isCorrect }) => !isCorrect))) {
    return { answersMismatch: 'A question must have at least one answer correct' };
  }
  if (!multipleChoices) {
    if (!(answers.every(({ isCorrect }) => isCorrect))) {
      return { answersMismatch: 'You Have marked Answers to have no choices. All answers for no choice question must be correct' };
    }
  } else {
    if (!multipleAnswers && answers.reduce((a, b) => +a + +b.isCorrect, 0) > 1) {
      return { answersMismatch: 'A single choice question can have only 1 correct answer' };
    }
  }

  return null;
};
