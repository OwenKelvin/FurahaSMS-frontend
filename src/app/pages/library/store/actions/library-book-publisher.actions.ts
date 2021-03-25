import {createAction, props} from '@ngrx/store';

export const loadLibraryBookPublishers = createAction(
  '[Library Book Publishers] Load Publishers'
);

export const loadLibraryBookPublishersSuccess = createAction(
  '[Library Book Publishers] Load Publishers Success',
  props<{ data: any[] }>()
);

export const loadLibraryBookPublishersFailure = createAction(
  '[Library Book Publishers] Load Publishers Failure',
  props<{ error: any }>()
);


export const loadLibraryBookPublisher = createAction(
  '[Library Book Publisher] Load Publisher',
  props<{ data: { id: number } }>()
);

export const loadLibraryBookPublisherSuccess = createAction(
  '[Library Book Publishers] Load Publisher Success',
  props<{ data: any }>()
);

export const loadLibraryBookPublisherFailure = createAction(
  '[Library Book Publishers] Load Publisher Failure',
  props<{ error: any }>()
);

export const removeLibraryBookPublisher = createAction(
  '[Library Book Publisher] Remove Publisher',
  props<{ data: { id: number } }>()
);
