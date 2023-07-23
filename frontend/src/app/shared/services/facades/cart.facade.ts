import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Order} from "../../../store/models/order.model";
import {CartActions} from "../../../store/actions/cart.actions";
import {PedidoDetalleRequest, PedidoDetalleService} from "@shared/services/pedido-detalle.service";
import {PlateService} from "@shared/services/plate.service";
import {selectCart} from "../../../store/selectors/cart.selectors";
import {forkJoin, map, Observable, of, switchMap} from "rxjs";
import {PedidoRequest, PedidoService} from "@shared/services/pedido.service";
import {CartState} from "../../../store/models/cart.model";
import {CartStatus} from "../../../store/models/cart-state.model";

@Injectable({
  providedIn: 'root'
})

/** @Deprecate*/
export class CartFacade {

  private pedidoRequest: PedidoRequest = {
    pedidoId: 0,
    estadoPedidoId: 1,
    usuarioId: 1,
    pagoId: 0,
    fechaPedido: new Date(),
    fechaEntregaEstimada: new Date(),
    fechaEntrega: new Date(),
    direccionId: 0
  }


  private estadoPedidoIdToCartStateMap: CartStatus[] = [
    CartStatus.New,
    CartStatus.ReadyToOrder,
    CartStatus.ReadyToPay,
    CartStatus.PreparingOrder,
    CartStatus.Finished
  ]

  constructor(private store: Store,
              private pedidoService: PedidoService,
              private pedidoDetalleService: PedidoDetalleService,
              private plateService: PlateService) {

    this.initCart(this.pedidoRequest.usuarioId).subscribe()


  }

  public getCart(): Observable<CartState> {
    return this.store.pipe(select(selectCart))
  }

  private changeCartState(state: CartStatus) {

    this.pedidoRequest.estadoPedidoId = this.estadoPedidoIdToCartStateMap.indexOf(state)
    this.pedidoService.modificarPedido(this.pedidoRequest).subscribe(
      (response) => {
        this.store.dispatch(CartActions.setState({state}));
      },
      (error) => {
        console.error('Error en la petición:', error);
      })

  }

  public addOrder(order: Order): void {
    let req = this.toPedidoDetalleRequest(order)

    this.store.pipe(select(selectCart)).subscribe(value => {
      if (!value.orders.some(o => o.plate.platoId === order.plate.platoId)) {
        this.pedidoDetalleService.crearPedidoDetalle(req).subscribe(
          (response) => {
            order.id = response.pedidoDetalleId
            this.store.dispatch(CartActions.addOrder({order}));
            this.changeCartState(CartStatus.PreparingOrder)
          },
          (error) => {
            console.error('Error en la petición:', error);
          })
      }
    })


  }

  public updateOrder(order: Order): void {
    let req = this.toPedidoDetalleRequest(order)

    this.pedidoDetalleService.modificarPedidoDetalle(req).subscribe(
      (response) => {
        order.id = response.pedidoDetalleId
        this.store.dispatch(CartActions.addOrder({order}));
      },
      (error) => {
        console.error('Error en la petición:', error);
      })
  }


  public removeOrderToCart(order: Order): void {
    let req = order.id
    this.pedidoDetalleService.eliminarPedidoDetalle(req).subscribe(
      (response) => {
        this.store.dispatch(CartActions.removeOrder({order}));
      },
      (error) => {
        console.error('Error en la petición:', error);
      })
  }

  private toPedidoDetalleRequest(order: Order): PedidoDetalleRequest {
    const pedidoDetalleId = order.id !== undefined ? order.id : 0;
    const platoId = order.plate.platoId !== undefined ? order.plate.platoId : 0;
    let pedidoId = 0

    this.store.pipe(select(selectCart)).subscribe(cart => {
      pedidoId = cart.id
    });

    return {
      pedidoDetalleId: pedidoDetalleId,
      pedidoId: pedidoId,
      platoId: platoId,
      cantidad: order.count,
      subTotal: order.totalParcial,
    };
  }

  initCart(idUsuario: number = 1): Observable<CartState> {
    const cart: CartState = {
      id: 0,
      orders: [],
      total: 0,
      state: CartStatus.New,
      loading: false,
      error: null
    };


    const estadoFinalizado = 4;

    return this.pedidoService.listarPedidos().pipe(
      switchMap((response) => {

        if (response.length > 0) {
          this.pedidoRequest = response
            .filter(value => value.usuarioId === idUsuario && value.estadoPedidoId !== estadoFinalizado)
            .reduce((prev, current) => {
              return prev.fechaPedido > current.fechaPedido ? prev : current;
            });

          cart.id = this.pedidoRequest.pedidoId;
          cart.state = this.estadoPedidoIdToCartStateMap[this.pedidoRequest.estadoPedidoId];
          return this.getOrders(this.pedidoRequest.pedidoId).pipe(
            map(orders => {
              cart.orders = orders;
              cart.total = orders.reduce((previousValue, currentValue) => currentValue.totalParcial + previousValue, 0)
              this.store.dispatch(CartActions.loadCart({cart}));
              return cart;
            })
          );
        } else {
          console.log("No hay pedidos... nuevo carrito");
          this.newCart(idUsuario);
          return of(cart);
        }

      })
    );
  }

  private newCart(idUsuario: number) {
    let pedidoRequest: PedidoRequest = {
      pedidoId: 0,
      direccionId: 0,
      estadoPedidoId: 0,
      fechaEntrega: new Date(),
      fechaEntregaEstimada: new Date(),
      fechaPedido: new Date(),
      pagoId: 1,//hardcodeado
      usuarioId: idUsuario
    };


    this.pedidoService.crearPedido(pedidoRequest).subscribe(
      (response) => {
        this.pedidoRequest = response
        const cart: CartState = {
          id: response.pedidoId,
          state: this.estadoPedidoIdToCartStateMap[response.estadoPedidoId],
          orders: [],
          total: 0,
          error: null,
          loading: false
        }
        this.store.dispatch(CartActions.loadCart({cart}));
      },
      (error) => {
        console.error('Error en la petición:', error);
      })
  }

  private getOrders(idPedido: number): Observable<Order[]> {
    return this.pedidoDetalleService.filtrarPorPedidoId(idPedido).pipe(
      switchMap((arrPedidoDetalle) => {
        const orderObservables: Observable<Order>[] = arrPedidoDetalle.map(unPedidoDetalle => {
          return this.toOrder(unPedidoDetalle);
        });
        return forkJoin(orderObservables);
      })
    );
  }

  private toOrder(req: PedidoDetalleRequest): Observable<Order> {
    return this.plateService.findById(req.platoId).pipe(
      switchMap(plateFound => {
        return of({
          id: req.pedidoDetalleId,
          plate: plateFound,
          count: req.cantidad,
          totalParcial: req.subTotal,
        });
      })
    );
  }


}
