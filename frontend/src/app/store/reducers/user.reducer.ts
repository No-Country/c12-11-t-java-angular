import {createReducer, on} from "@ngrx/store";
import {UserState} from "../models/user.model";
import {UserActions} from "../actions/user.actions";
import {
  handleCustomerLoadedSuccess,
  handleLoad,
  handleLoadedError,
  handleOrderLoadedSuccess,
  handleUserLoadedSuccess
} from "./handlers/user.handler";

export const initialState: UserState = {
  user: {
    userId: 1,
    token: '',
    username: 'dani'
  },
  customer: {
    clienteId: -1,
    nombre: "",
    apellido: "",
    email: "",
    numeroCelular: ""
  },
  orders: [],
  loading: false,
  error: null
};


export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUser, handleLoad),
  on(UserActions.loadUserSuccess, handleUserLoadedSuccess),
  on(UserActions.loadUserFailure, handleLoadedError),

  on(UserActions.loadCustomer, handleLoad),
  on(UserActions.loadCustomerSuccess, handleCustomerLoadedSuccess),
  on(UserActions.loadCustomerFailure, handleLoadedError),


  on(UserActions.loadOrder, handleLoad),
  on(UserActions.loadOrderSuccess, handleOrderLoadedSuccess),
  on(UserActions.loadOrderFailure, handleLoadedError),
);
