import * as fromPermissions from './permissions.actions';

describe('loadPermissionss', () => {
  it('should return an action', () => {
    expect(fromPermissions.loadPermissionss().type).toBe('[Permissions] Load Permissionss');
  });
});
