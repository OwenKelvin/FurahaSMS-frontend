import { selectAppPermissionsState } from './permissions.selectors';
import { permissionsFeatureKey } from '../reducers/permissions.reducer';


describe('Permissions Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAppPermissionsState({
      [permissionsFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
