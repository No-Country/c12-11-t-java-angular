import {createReducer, on} from '@ngrx/store';
import {initialState} from "@modules/container/store/state/menu.state";
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
  updateFilterByCategory,
  updateFilterBySearch
} from "@modules/container/store/actions/filters.actions";
import {handleLoadMenu, handleSetMenu} from "@modules/container/store/reducers/handlers/menu.handler";
import {
  handleLoadPlatesFailure,
  handleLoadPlatesSuccess,
  handleSetPlateSelected
} from "@modules/container/store/reducers/handlers/plate.handler";
import {
  handleFilterByCategory,
  handleFilterBySearchTerm,
  handleFilterSinTacc,
  handleFilterVegano,
  handleRemoveFilters
} from "@modules/container/store/reducers/handlers/filter.handler";


export const menuReducer = createReducer(
  initialState,
  on(loadMenu, handleLoadMenu),
  on(loadPlatesSuccess, handleLoadPlatesSuccess),
  on(loadPlatesFailure, handleLoadPlatesFailure),
  on(setMenu, handleSetMenu),
  on(removeFilters, handleRemoveFilters),
  on(toggleFilterSinTacc, handleFilterSinTacc),
  on(toggleFilterVegano, handleFilterVegano),
  on(updateFilterByCategory, handleFilterByCategory),
  on(updateFilterBySearch, handleFilterBySearchTerm),
  on(setPlateSelected, handleSetPlateSelected),
)



