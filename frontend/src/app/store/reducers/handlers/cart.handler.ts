import {Order} from "../../models/order.model";
import {CartStatus} from "../../models/cart-state.model";
import {CartState} from "../../models/cart.model";


export const handleLoadCart = (state: CartState, {cart}: { cart: CartState }): CartState => {

  return cart;
}

export const handleAddOrderToCart = (state: CartState, {order}: { order: Order }): CartState => {
  const orders = [...state.orders];
  const existingOrderIndex = orders.findIndex(oneOrder => oneOrder.plate === order.plate);

  if (existingOrderIndex !== -1) {
    orders[existingOrderIndex] = order;
  } else {
    orders.push(order);
  }

  return {
    ...state,
    orders: orders,
    total: calculateTotal(orders),
    state: CartStatus.ReadyToOrder
  }
}


export const handleRemoveOrderToCart = (state: CartState, {order}: { order: Order }): CartState => {
  const ordersUpdated = [...state.orders.filter(oneOrder => oneOrder.plate.platoId !== order.plate.platoId)];
  const totalUpdated = calculateTotal(ordersUpdated);

  return {
    ...state,
    orders: ordersUpdated,
    total: totalUpdated,
    state: ordersUpdated.length === 0 ? CartStatus.New : CartStatus.ReadyToOrder
  }
};

export const handleChangeCartState = (state: CartState, {state: cartState}: { state: CartStatus }): CartState => {
  return {
    ...state,
    state: cartState
  }
}


function calculateTotal(orders: Order[]) {
  return orders.reduce((acc, order) => acc + order.totalParcial, 0);
}
