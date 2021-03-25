export interface IExamPaperQuestion {
  id: number;
  correctAnswerDescription: string;
  multipleAnswers: boolean;
  multipleChoices: boolean;
  points: number;
  description: string;
  tags: any[];
  answers: any[];

}
