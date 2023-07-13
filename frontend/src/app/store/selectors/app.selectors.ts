import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from '../reducers/app.reducer';

export const selectFeature1State = createFeatureSelector<AppState>('feature1');

export const selectFeature1Data = createSelector(
  selectFeature1State,
  (state: AppState) => state.data
);

export const selectAppLoading = createSelector(
  selectFeature1State,
  (state: AppState) => state.loading
);

export const selectAppError = createSelector(
  selectFeature1State,
  (state: AppState) => state.error
);
