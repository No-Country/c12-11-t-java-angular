import {createReducer, on} from '@ngrx/store';
import {initialState, MenuState} from "@modules/container/store/state/menu.state";
import {
  loadMenu,
  loadPlatesFailure,
  loadPlatesSuccess,
  setPlateSelected
} from "@modules/container/store/actions/plates.actions";
import {setMenu} from "@modules/container/store/actions/menu.actions";
import {
  removeFilters,
  toggleFilterSinTacc,
  toggleFilterVegano,
  updateFilterByNames,
  updateFilterBySearch
} from "@modules/container/store/actions/filters.actions";


export const menuReducer = createReducer(
  initialState,
  on(loadMenu, (state: MenuState) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(loadPlatesSuccess, (state: MenuState, {plates}) => (
    {
      ...state,
      plates: plates,//TODO: Cambiar
      loading: false,
      error: null
    })),
  on(loadPlatesFailure, (state: MenuState, {error}) => ({
    ...state,
    plates: initialState.plates,//TODO: Cambiar
    loading: false,
    error
  })),
  on(setMenu, (state: MenuState, {menuName}) => ({
    ...state,
    menu: menuName
  })),
  on(removeFilters, (state: MenuState, _) => ({
    ...state,
    activateFilters: false,
    /**@Deprecated*/
    activateFilterSinTacc: false,
    /**@Deprecated*/
    activateFilterVegano: false,
    activateFilterSearchTerm: '',
    activateFilterByCategory: '',
  })),
  /**@Deprecated*/
  on(toggleFilterSinTacc, (state: MenuState, _) => ({
    ...state,
    activateFilterSinTacc: !state.activateFilterSinTacc,
    activateFilters: true
  })),
  /**@Deprecated*/
  on(toggleFilterVegano, (state: MenuState, _) => ({
    ...state,
    activateFilterVegano: !state.activateFilterVegano,
    activateFilters: true
  })),
  on(updateFilterByNames, (state: MenuState, {filterNames: filterName}) => ({
    ...state,
    activateFilterByCategory: filterName,
    activateFilters: filterName !== ''
  })),
  on(updateFilterBySearch, (state: MenuState, {searchTerm}) => ({
    ...state,
    activateFilterSearchTerm: searchTerm,
    activateFilters: searchTerm.trim().length > 0 || state.activateFilterByCategory.length > 0
  })),
  on(setPlateSelected, (state: MenuState, {plateSelected}) => ({
    ...state,
    plateSelected: plateSelected
  })),
)
