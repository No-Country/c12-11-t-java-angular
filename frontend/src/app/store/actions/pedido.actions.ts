import { createAction, props } from "@ngrx/store";
export const AddIdAddress = createAction(' add Id address',props<{direccionId:number}>());
