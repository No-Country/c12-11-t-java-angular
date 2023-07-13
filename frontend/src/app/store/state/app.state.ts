import {Feature1} from '../models/app.model';

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
