import { TimetableEditorDirective } from './timetable-editor.directive';

describe('TimetableEditorDirective', () => {
  it('should create an instance', () => {
    const spyElement = jasmine.createSpyObj({element: ''});
    const directive = new TimetableEditorDirective(spyElement);
    expect(directive).toBeTruthy();
  });
});
