import * as fromExamPaper from '../reducers/exam-paper.reducer';
import { selectExamPaperState } from './exam-paper.selectors';

describe('ExamPaper Selectors', () => {
  it('should select the feature state', () => {
    const result = selectExamPaperState({
      [fromExamPaper.examPaperFeatureKey]: {
        examPapers: {
          0: {
            id: 0,
            name: '',
            instructions: [],
            tags: [],
            questions: [],
          }
        }
      }
    });

    expect(result).toEqual({
      examPapers: {
        0: {
          id: 0,
          name: '',
          instructions: [],
          tags: [],
          questions: [],
        }
      }
    });
  });
});
