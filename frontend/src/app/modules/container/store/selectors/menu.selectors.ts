import {createFeatureSelector, createSelector} from '@ngrx/store';
import {MenuState} from "@modules/container/store/state/menu.state";


export const selectMenuState = createFeatureSelector<MenuState>('menu');

/*Filtros*/
export const selectFilters = createSelector(
  selectMenuState,
  (state: MenuState) => {
    return {
      activateFilterSinTacc: state.activateFilterSinTacc,
      activateFilterVegano: state.activateFilterVegano,
      activateFilterByCategory: state.activateFilterByCategory,
      activateFilterSearchTerm: state.activateFilterSearchTerm,
      activateFilters: state.activateFilters,
    }
  }
);
export const selectLoading = createSelector(
  selectMenuState,
  (state: MenuState) => state.loading
);

export const selectMenu = createSelector(
  selectMenuState,
  (state: MenuState) => state.menu
);

export const selectPlates = createSelector(
  selectMenuState,
  (state: MenuState) => state.plates
);

export const selectAppLoading = createSelector(
  selectMenuState,
  (state: MenuState) => state.loading
);

export const selectAppError = createSelector(
  selectMenuState,
  (state: MenuState) => state.error
);
