import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartFacade} from "@shared/services/facades/cart.facade";
import {Store} from "@ngrx/store";
import {PedidoDetalleService} from "@shared/services/pedido-detalle.service";
import {CartActions} from "../actions/cart.actions";
import {catchError, EMPTY, exhaustMap} from "rxjs";
import {PedidoService} from "@shared/services/pedido.service";

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartFacade: CartFacade,
    private store: Store,
    private pedidoService: PedidoService,
    private pedidoDetalleService: PedidoDetalleService
  ) {
  }


  loadMovies$ = createEffect(() => this.actions$.pipe(
      ofType(CartActions.loadCart),
      exhaustMap(() => this.pedidoService.listarPedidosDeUsuario(1)
        .pipe(
          map(movies => ({type: '[Movies API] Movies Loaded Success', payload: movies})),
          catchError(() => EMPTY)
        ))
    )
  );


}
