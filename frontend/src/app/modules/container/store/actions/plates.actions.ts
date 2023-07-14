import {createAction, props} from '@ngrx/store';
import {Plate} from "@shared/interfaces/plate.interface";

export const loadMenu = createAction('[Menu] Load menu');

export const applyFilters = createAction('[Menu] Apply Filters');

export const loadPlatesSuccess = createAction(
  '[App] Load plates Success',
  props<{ plates: Plate[] }>()
);

export const loadPlatesFailure = createAction(
  '[App] Load plates Failure',
  props<{ error: string }>()
);
