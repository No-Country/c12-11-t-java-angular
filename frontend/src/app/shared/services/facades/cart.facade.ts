import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Order} from "../../../store/models/order.model";
import {CartActions} from "../../../store/actions/cart.actions";
import {PedidoDetalleRequest, PedidoDetalleService} from "@shared/services/pedido-detalle.service";
import {PlateService} from "@shared/services/plate.service";
import {selectCart} from "../../../store/selectors/cart.selectors";
import {Observable, of, switchMap} from "rxjs";
import {PedidoRequest, PedidoService} from "@shared/services/pedido.service";
import {Cart} from "../../../store/models/cart.model";
import {CartState} from "../../../store/models/cart-state.model";

@Injectable({
  providedIn: 'root'
})
export class CartFacade {

  constructor(private store: Store,
              private pedidoService: PedidoService,
              private pedidoDetalleService: PedidoDetalleService,
              private plateService: PlateService) {
    this.initCart()
  }

  private initCart() {
    let pedidoRequest: PedidoRequest = {
      pedidoId: 0,
      direccionId: 0,
      estadoPedidoId: 0,
      fechaEntrega: new Date(), // Cambia Date.now() por new Date()
      fechaEntregaEstimada: new Date(), // Cambia Date.now() por new Date()
      fechaPedido: new Date(), // Cambia Date.now() por new Date()
      pagoId: 0,
      usuarioId: 0
    };

    let cart: Cart = {
      id: 0,
      orders: [],
      total: 0,
      state: CartState.New
    }

    const estadoPedidoIdToCartStateMap: { [key: number]: CartState } = {
      0: CartState.New,
      1: CartState.ReadyToOrder,
      2: CartState.ReadyToPay,
      3: CartState.PreparingOrder,
      4: CartState.Finished,
    };


    this.pedidoService.crearPedido(pedidoRequest).subscribe(
      (response) => {
        pedidoRequest = response
        cart.id = response.pedidoId

        cart.state = estadoPedidoIdToCartStateMap[response.estadoPedidoId];

        this.store.dispatch(CartActions.initCart({cart}));
      },
      (error) => {
        console.error('Error en la petición:', error);
      })
  }

  public addOrder(order: Order): void {
    let req = this.toPedidoDetalleRequest(order)

    this.pedidoDetalleService.crearPedidoDetalle(req).subscribe(
      (response) => {
        order.id = response.pedidoDetalleId
        this.store.dispatch(CartActions.addOrder({order}));
      },
      (error) => {
        console.error('Error en la petición:', error);
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



}
