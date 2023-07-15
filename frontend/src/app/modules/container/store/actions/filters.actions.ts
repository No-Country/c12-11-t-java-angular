import {createAction, props} from '@ngrx/store';
import {MenuActionTypeEnum} from "@modules/container/store/models/menu-action-type.enum";


export const removeFilters = createAction(
  MenuActionTypeEnum.RemoveFilters
);

/**@Deprecated*/
export const toggleFilterVegano = createAction(
  MenuActionTypeEnum.ToggleFilterVegano
);

/**@Deprecated*/
export const toggleFilterSinTacc = createAction(
  MenuActionTypeEnum.ToggleFilterSinTacc
);

export const updateFilterByCategory = createAction(
  MenuActionTypeEnum.UpdateFilterByCategory,
  props<{ filterNames: string }>()
);

export const updateFilterBySearch = createAction(
  MenuActionTypeEnum.UpdateFilterBySearch,
  props<{ searchTerm: string }>()
)


