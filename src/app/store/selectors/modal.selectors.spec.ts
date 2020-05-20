import { selectModalState } from './modal.selectors';
import { modalFeatureKey } from '../reducers/modal.reducer';


describe('Modal Selectors', () => {
  it('should select the feature state', () => {
    const result = selectModalState({
      app: { [modalFeatureKey]: { open: true } }
    });

    expect(result).toEqual({ open: true });
  });
});
