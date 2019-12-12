import { createAction, props } from '@ngrx/store';
import { ErrorMessageStateInterface } from '../reducers/error-message.reducer';

export const loadErrorMessages = createAction(
  '[ErrorMessage] Load ErrorMessages'
);

export const loadErrorMessagesSuccess = createAction(
  '[ErrorMessage] Load ErrorMessages Success',
  props<ErrorMessageStateInterface>()
);

export const loadErrorMessagesFailure = createAction(
  '[ErrorMessage] Load ErrorMessages Failure'
);
