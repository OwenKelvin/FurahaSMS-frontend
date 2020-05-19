import * as fromModal from './modal.actions';

describe('loadModals', () => {
  it('should return an action', () => {
    expect(fromModal.loadModals().type).toBe('[Modal] Load Modals');
  });
});
