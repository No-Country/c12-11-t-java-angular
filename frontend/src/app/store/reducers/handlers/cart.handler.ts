import {Order} from "../../models/order.model";
import {CartState} from "../../models/cart-state.model";
import {AppState} from "../../models/app-state.model";

export const handleAddOrderToCart = (state: AppState, {order}: { order: Order }): AppState => {
  const orders = [...state.cart.orders];
  const existingOrderIndex = orders.findIndex(oneOrder => oneOrder.plate === order.plate);

  if (existingOrderIndex !== -1) {
    orders[existingOrderIndex] = order;
  } else {
    orders.push(order);
  }

  return {
    ...state,
    cart: {
      ...state.cart,
      orders,
      total: calculateTotal(orders),
      state: CartState.ReadyToOrder
    }
  };
};


export const handleRemoveOrderToCart = (state: AppState, {order}: { order: Order }): AppState => {
  const ordersUpdated = [...state.cart.orders.filter(oneOrder => oneOrder.plate.platoId !== order.plate.platoId)];
  const totalUpdated = calculateTotal(ordersUpdated);

  return {
    ...state,
    cart: {
      ...state.cart,
      orders: ordersUpdated,
      total: totalUpdated,
      state: ordersUpdated.length === 0 ? CartState.New : CartState.ReadyToOrder
    }
  };
};

export const handleChangeCartState = (state: AppState, {state: cartState}: { state: CartState }): AppState => ({
  ...state,
  cart: {
    ...state.cart,
    state: cartState
  }
});


function calculateTotal(orders: Order[]) {
  return orders.reduce((acc, order) => acc + order.totalParcial, 0);
}
