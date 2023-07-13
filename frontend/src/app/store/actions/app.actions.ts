import {createAction, props} from '@ngrx/store';
import {Plate} from "@shared/interfaces/plate.interface";

export const loadData = createAction('[App] Load data');

export const loadDataSuccess = createAction(
  '[App] Load data Success',
  props<{ feature1Data: Plate[] }>()
);

export const loadDataFailure = createAction(
  '[App] Load data Failure',
  props<{ error: string }>()
);
