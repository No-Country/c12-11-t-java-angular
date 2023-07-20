import {MenuState} from "@modules/container/store/models/menu-state.model";


export function handleRemoveFilters(state: MenuState): MenuState {
  return {
    ...state,
    activateFilters: false,
    activateFilterSinTacc: false,
    activateFilterVegano: false,
    activateFilterSearchTerm: '',
    activateFilterByCategory: '',
  };
}

export function handleFilterSinTacc(state: MenuState): MenuState {
  return {
    ...state,
    activateFilterSinTacc: !state.activateFilterSinTacc,
    activateFilters: true
  };
}

export function handleFilterVegano(state: MenuState): MenuState {
  return {
    ...state,
    activateFilterVegano: !state.activateFilterVegano,
    activateFilters: true
  };
}

export function handleFilterByCategory(state: MenuState, {filterNames}: { filterNames: string }): MenuState {
  return {
    ...state,
    activateFilterByCategory: state.activateFilterByCategory !== filterNames ? filterNames : '',
    activateFilters: filterNames !== ''
  };
}

export function handleFilterBySearchTerm(state: MenuState, {searchTerm}: { searchTerm: string }): MenuState {
  return {
    ...state,
    activateFilterSearchTerm: searchTerm,
    activateFilters: searchTerm.trim().length > 0 || state.activateFilterByCategory.length > 0
  };
}


