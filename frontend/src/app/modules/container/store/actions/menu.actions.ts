import {createAction, props} from '@ngrx/store';


export const loadMenu = createAction(
  '[Menu] Load menu',
  props<{ menuName: string }>()
);
