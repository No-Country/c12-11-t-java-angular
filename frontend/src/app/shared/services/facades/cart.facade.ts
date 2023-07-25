import {Injectable} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Order} from "../../../store/models/order.model";
import {CartActions} from "../../../store/actions/cart.actions";
import {PedidoDetalleRequest, PedidoDetalleService} from "@shared/services/pedido-detalle.service";
import {PlateService} from "@shared/services/plate.service";
import {selectCart} from "../../../store/selectors/cart.selectors";
import {Observable, of, switchMap} from "rxjs";
import {PedidoRequest, PedidoService} from "@shared/services/pedido.service";
import {CartState} from "../../../store/models/cart.model";
import {CartStatus} from "../../../store/models/cart-status.model";

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

    this.store.dispatch(CartActions.loadCart())

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

    this.store.dispatch(CartActions.addOrderToCart({order}));
    this.store.dispatch(CartActions.setState({state: CartStatus.ReadyToOrder}));
  }

  public updateOrder(order: Order): void {
    this.store.dispatch(CartActions.updateOrderToCart({order}))
  }


  public removeOrderToCart(order: Order): void {
    this.store.dispatch(CartActions.removeOrderFromCart({order}));
  }

  private toPedidoDetalleRequest(order: Order): PedidoDetalleRequest {
    const pedidoDetalleId = order.id !== undefined ? order.id : 0;
    const platoId = order.plate.platoId !== undefined ? order.plate.platoId : 0;
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


}
