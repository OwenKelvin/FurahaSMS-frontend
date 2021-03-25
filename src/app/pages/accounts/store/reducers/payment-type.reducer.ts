import { Action, createReducer, on } from '@ngrx/store';

import * as fromPaymentMethodsActions from './../actions/payment-type.actions';


export const paymentTypeFeatureKey = 'paymentType';

export interface State {
  [id: number]: {
    id?: number;
    name?: string;
  };
}

export const initialState: State = { };

const paymentTypeReducer = createReducer(
  initialState,
  on(fromPaymentMethodsActions.loadPaymentTypes, state => state),
  on(fromPaymentMethodsActions.loadPaymentTypesSuccess, (state, action) => {
    const payload = action.data.reduce((prev, next) => ({...prev, [next.id]: next}), {});
    return {...state, ...payload};
  }),
  on(fromPaymentMethodsActions.loadPaymentTypesFailure, state => state),
);

export const reducer = (state: State | undefined, action: Action) => paymentTypeReducer(state, action);
