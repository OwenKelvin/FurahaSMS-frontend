import * as fromApp from '../reducers/app.reducer';
import { selectAppState } from './app.selectors';
import { genderFeatureKey } from '../reducers/gender.reducer';
import { religionFeatureKey } from '../reducers/religion.reducer';
import { editModeFeatureKey } from '../reducers/edit-mode.reducer';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';
import { modalFeatureKey } from '../reducers/modal.reducer';

describe('App Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppState({
      [fromApp.appFeatureKey]: {
        [genderFeatureKey]: [{}],
        [religionFeatureKey]: [{}],
        [editModeFeatureKey]: { on: false },
        [permissionsFeatureKey]: {},
        [modalFeatureKey]: { open: false}
      }
    });

    expect(result).toEqual({
      [genderFeatureKey]: [{}],
      [religionFeatureKey]: [{}],
      [editModeFeatureKey]: { on: false },
      [permissionsFeatureKey]: {},
      [modalFeatureKey]: { open: false }

    });
  });
});
