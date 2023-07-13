import {createReducer, on} from '@ngrx/store';
import {loadDataFailure, loadDataSuccess} from '../actions/app.actions';
import {Feature1} from "@modules/container/store/models/app.model";

export interface AppState {
  data: Feature1[];
  loading: boolean;
  error: string | null;
}

export const initialState: AppState = {
  data: [],
  loading: false,
  error: null
};

export const appReducer = createReducer(
  initialState,
  on(loadDataSuccess, (state, {feature1Data}) => ({
    ...state,
    feature1Data,
    loading: false,
    error: null
  })),
  on(loadDataFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  }))
);
