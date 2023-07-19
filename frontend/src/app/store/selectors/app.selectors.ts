import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from "../models/app-state.model";

/*Los selectors se encargan de hacer los getters al state/store */
export const selectAppState = createFeatureSelector<AppState>('app');


export const selectUser = createSelector(
  selectAppState,
  (state: AppState) => state.user
);


export const selectAppLoading = createSelector(
  selectAppState,
  (state: AppState) => state.loading
);

export const selectAppError = createSelector(
  selectAppState,
  (state: AppState) => state.error
);
