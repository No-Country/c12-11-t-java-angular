import {createAction, props} from '@ngrx/store';
import {Plate} from "@shared/interfaces/plate.interface";
import {MenuActionTypeEnum} from "@modules/container/store/models/menu-action-type.enum";

export const loadMenu = createAction(MenuActionTypeEnum.LoadMenu);

export const applyFilters = createAction(MenuActionTypeEnum.ApplyFilters);

export const loadPlatesSuccess = createAction(
  MenuActionTypeEnum.LoadPlatesSuccess,
  props<{ plates: Plate[] }>()
);

export const loadPlatesFailure = createAction(
  MenuActionTypeEnum.LoadPlatesFailure,
  props<{ error: string }>()
);

export const setPlateSelected = createAction(
  MenuActionTypeEnum.SetPlateSelected,
  props<{ plateSelected: Plate }>()
);
