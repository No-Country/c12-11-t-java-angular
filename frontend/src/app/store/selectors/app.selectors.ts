import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState} from "../state/app.state";

/*Los selectors se encargan de hacer los getters al state/store */
export const selectAppState = createFeatureSelector<AppState>('AppState');

export const selectShoppingCart = createSelector(
  selectAppState,
  (state: AppState) => state.shoppingCart
);


export const selectAppLoading = createSelector(
  selectAppState,
  (state: AppState) => state.loading
);

export const selectAppError = createSelector(
  selectAppState,
  (state: AppState) => state.error
);
