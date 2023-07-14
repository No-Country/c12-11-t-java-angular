import {createAction, props} from '@ngrx/store';


export const removeFilters = createAction(
  '[Menu] Toggle remove filters'
);

/**@Deprecated*/
export const toggleFilterVegano = createAction(
  '[Menu] Toggle filter vegano'
);

/**@Deprecated*/
export const toggleFilterSinTacc = createAction(
  '[Menu] Toggle filter sin TACC'
);

export const updateFilterByNames = createAction(
  '[Menu] Update filter by names',
  props<{ filterNames: string }>()
);

export const updateFilterBySearch = createAction(
  '[Menu] Update filter by search',
  props<{ searchTerm: string }>()
);

