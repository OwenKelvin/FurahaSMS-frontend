import * as fromEditMode from './edit-mode.actions';

describe('loadEditModes', () => {
  it('should return an action', () => {
    expect(fromEditMode.loadEditModes().type).toBe('[EditMode] Load EditModes');
  });
});
