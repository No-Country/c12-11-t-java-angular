import {Order} from "../../models/order.model";
import {UserState} from "../../models/user.model";
import {Customer} from "@shared/services/customer.service";
import {UserAPI} from "@shared/services/user.service";


export const handleLoad = (state: UserState): UserState => {
  return {
    ...state,
    loading: true
  }
}


export const handleCustomerLoadedSuccess = (state: UserState, {customer}: { customer: Customer }): UserState => {
  return {
    ...state,
    customer: customer,
    loading: false
  };
}


export const handleUserLoadedSuccess = (state: UserState, {user}: { user: UserAPI }): UserState => {
  return {
    ...state,
    user: {
      userId: user.usuarioId,
      token: "",
      username: user.usuario
    },
    loading: false
  };
}

export const handleOrderLoadedSuccess = (state: UserState, {orders}: { orders: Order[] }): UserState => {
  return {
    ...state,
    orders: orders,
    loading: false
  };
}

export const handleLoadedError = (state: UserState, {error}: { error: string }): UserState => {
  return {
    ...state,
    loading: false,
    error
  };
}
