import * as fromEditMode from './edit-mode.actions';

describe('loadEditModes', () => {
  it('should return an action for success', () => {
    expect(fromEditMode.loadEditModesSuccess().type).toBe('[EditMode] Load EditModes Success');
  });

  it('should return an action', () => {
    expect(fromEditMode.loadEditModesFailure().type).toBe('[EditMode] Load EditModes Failure');
  });
});
