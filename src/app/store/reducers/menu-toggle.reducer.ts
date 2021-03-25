import { Action, createReducer, on } from '@ngrx/store';
import { hideMenu, showMenu } from './../actions/menu-toggle.actions';

export const menuToggleFeatureKey = 'menuToggle';

export interface MenuStateInterface {
  showMenu: boolean;
}

export const initialState: MenuStateInterface = {
  showMenu: true
};

const menuToggleReducer = createReducer(
  initialState,
  on(showMenu, state => ({
      ...state, showMenu : true
    })),
  on(hideMenu, state => ({
      ...state, showMenu : false
    }))
);

export const reducer = (state: MenuStateInterface | undefined, action: Action) => menuToggleReducer(state, action);
