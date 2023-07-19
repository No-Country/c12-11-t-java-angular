import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AppState} from "../models/app-state.model";

export const selectCartState = createFeatureSelector<AppState>('cart');

export const selectCart = createSelector(
  selectCartState,
  (state: AppState) => state.cart
);
