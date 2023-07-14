import {createAction, props} from '@ngrx/store';


export const setMenu = createAction(
  '[Menu] Set menu',
  props<{ menuName: string }>()
);
