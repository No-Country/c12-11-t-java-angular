import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartFacade} from "@shared/services/facades/cart.facade";
import {select, Store} from "@ngrx/store";
import {PedidoDetalleRequest, PedidoDetalleService} from "@shared/services/pedido-detalle.service";
import {catchError, exhaustMap, filter, map, of, tap, withLatestFrom} from "rxjs";
import {PedidoRequest, PedidoService} from "@shared/services/pedido.service";
import {CartActions} from "../actions/cart.actions";
import {selectCart} from "../selectors/cart.selectors";
import {CartStatus} from "../models/cart-status.model";
import {Order} from "../models/order.model";
import {selectUser} from "../selectors/user.selectors";

@Injectable({
  providedIn: "root"
})
export class CartEffects {

  private estadoPedidoIdToCartStateMap: CartStatus[] = [
    CartStatus.New,
    CartStatus.ReadyToOrder,
    CartStatus.ReadyToPay,
    CartStatus.PreparingOrder,
    CartStatus.Finished
  ]


  constructor(
    private actions$: Actions,
    private cartFacade: CartFacade,
    private store: Store,
    private pedidoService: PedidoService,
    private pedidoDetalleService: PedidoDetalleService
  ) {
  }

  private getLastPedidoRequestFromData(data: PedidoRequest[]) {
    const id = data.reduce((max, elemento) => (elemento.pedidoId > max ? elemento.pedidoId : max), 0)
    return data.filter(data => data.pedidoId === id)[0]
  }

  private pedidoRequestIsFinished(pedido: PedidoRequest) {
    return this.estadoPedidoIdToCartStateMap[pedido.estadoPedidoId] === CartStatus.Finished
  }


  // noinspection TypeScriptValidateTypes
  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.loadCart),
      withLatestFrom(this.store.select(selectUser)),
      exhaustMap(([action, store]) =>
        this.pedidoService.listarPedidosDeUsuario(store.userId).pipe(
          map((data) => {
            if (data.length > 0) {
              const lastOrder = this.getLastPedidoRequestFromData(data)
              if (!this.pedidoRequestIsFinished(lastOrder)) {
                return CartActions.setId({id: lastOrder.pedidoId, status: lastOrder.estadoPedidoId})
              }
            }
            return CartActions.newCart()
          }),
          catchError((error) => {
            console.error('Error al cargar el carrito:', error);
            return of(CartActions.cartLoadedError({error: 'Error al cargar carrito'}));
          })
        )
      )
    )
  );

  private newCartRequest(idUsuario: number): PedidoRequest {
    return {
      pedidoId: 0,
      pagoId: 0,
      direccionId: 0,
      usuarioId: idUsuario,
      fechaPedido: new Date(),
      fechaEntrega: new Date(),
      fechaEntregaEstimada: new Date(),
      estadoPedidoId: 0
    }
  }

  // noinspection TypeScriptValidateTypes
  newCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.newCart),
      withLatestFrom(this.store.select(selectUser)),
      exhaustMap(([action, store]) =>
        this.pedidoService.crearPedido(this.newCartRequest(store.userId)).pipe(
          map((data) => {

            return CartActions.setId({id: data.pedidoId, status: 0})
          }),
          catchError((error) => {
            console.error('Error al cargar el carrito:', error);
            return of(CartActions.cartLoadedError({error: 'Error al cargar carrito'}));
          })
        )
      )
    )
  );

  // noinspection TypeScriptValidateTypes
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.setId),
      withLatestFrom(this.store.select(selectCart)),
      exhaustMap(([action, store]) =>
        this.pedidoDetalleService.consultarPedidosDetalleSegunPedido(store.cart.id).pipe(
          map((data) =>
            CartActions.cartLoadedSuccess({orders: data})
          ),
          catchError((error) => {
            console.error('Error al cargar el carrito:', error);
            return of(CartActions.cartLoadedError({error: 'Error al cargar carrito'}));
          })
        )
      )
    )
  );


  private toPedidoDetalleRequest(order: Order): PedidoDetalleRequest {
    const pedidoDetalleId = order.id ?? -1;
    const platoId = order.plate.platoId ?? -1;
    let pedidoId = 0

    this.store.pipe(select(selectCart)).subscribe(state => {
      pedidoId = state.cart.id
    });

    return {
      pedidoDetalleId: pedidoDetalleId,
      pedidoId: pedidoId,
      platoId: platoId,
      cantidad: order.count,
      subTotal: order.totalParcial,
    };
  }

  // noinspection TypeScriptValidateTypes
  addOrderToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.addOrderToCart),
      withLatestFrom(this.store.select(selectCart)),
      filter(([action, store]) => !this.orderExistsInCart(action.order, store.cart.orders)),
      exhaustMap(([action, store]) =>
        this.pedidoDetalleService.crearPedidoDetalle(this.toPedidoDetalleRequest(action.order)).pipe(
          map((response) => {
            const orderWithId: Order = {...action.order, id: response.pedidoDetalleId};
            return CartActions.addOrderToCartSuccess({order: orderWithId});
          }),
          catchError((error) => {
            console.error('Error en la petición:', error);
            return of(CartActions.addOrderToCartFailure({error: 'Error al cargar orden al carrito'}));
          })
        )
      )
    )
  );

  // noinspection TypeScriptValidateTypes
  updateOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.updateOrderToCart),
      exhaustMap(action =>
        this.pedidoDetalleService.modificarPedidoDetalle(this.toPedidoDetalleRequest(action.order)).pipe(
          map((response) => {
            const orderWithId: Order = {...action.order, id: response.pedidoDetalleId};

            return CartActions.addOrderToCart({order: orderWithId});
          }),
          catchError((error) => {
            console.error('Error en la petición:', error);
            return of();
          })
        )
      )
    )
  );

  // noinspection TypeScriptValidateTypes
  removeOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CartActions.removeOrderFromCart),
      exhaustMap(action =>
        this.pedidoDetalleService.eliminarPedidoDetalle(action.order.id).pipe(
          map(() => {
            return CartActions.removeOrderFromCart({order: action.order});
          }),
          catchError((error) => {
            console.error('Error en la petición:', error);
            return of(); // Otra acción para manejar el error si lo deseas
          })
        )
      )
    )
  );


  orderExistsInCart(order: Order, cartOrders: Order[]): boolean {
    return cartOrders.some(cartOrder => cartOrder.plate.platoId === order.plate.platoId);
  }
}


