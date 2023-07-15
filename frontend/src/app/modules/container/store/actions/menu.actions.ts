import {createAction, props} from '@ngrx/store';
import {MenuActionTypeEnum} from "@modules/container/store/models/menu-action-type.enum";


export const setMenu = createAction(
  MenuActionTypeEnum.SetMenu,
  props<{ menuName: string }>()
);
