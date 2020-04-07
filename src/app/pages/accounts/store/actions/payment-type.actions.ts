import { createAction, props } from '@ngrx/store';

export const loadPaymentTypes = createAction(
  '[PaymentType] Load PaymentTypes'
);

export const loadPaymentTypesSuccess = createAction(
  '[PaymentType] Load PaymentTypes Success',
  props<{ data: any[] }>()
);

export const loadPaymentTypesFailure = createAction(
  '[PaymentType] Load PaymentTypes Failure',
  props<{ error: any }>()
);
