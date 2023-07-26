import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {CartFacade} from "@shared/services/facades/cart.facade";
import {Store} from "@ngrx/store";
import {catchError, exhaustMap, map, of, withLatestFrom} from "rxjs";
import {PedidoService} from "@shared/services/pedido.service";
import {UserActions} from "../actions/user.actions";
import {selectUser} from "../selectors/user.selectors";
import {AddressService} from "@shared/services/address.service";
import {CustomerService} from "@shared/services/customer.service";
import {UserService} from "@shared/services/user.service";
import {CartActions} from "../actions/cart.actions";

@Injectable({
  providedIn: "root"
})
export class UserEffects {

  constructor(
    private actions$: Actions,
    private cartFacade: CartFacade,
    private store: Store,
    private pedidoService: PedidoService,
    private customerService: CustomerService,
    private userService: UserService,
    private addressService: AddressService
  ) {
  }

  // noinspection TypeScriptValidateTypes
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadUser),
      exhaustMap((action) =>
        this.userService.consultarUsuario(action.id).pipe(
          map((data) => {
            UserActions.loadUserSuccess({user: data})
            return UserActions.loadCustomer({id: data.clienteId})
          }),
          catchError((error) => {
            console.error('Error al cargar usuario:', error);
            return of(UserActions.loadCustomerFailure({error: 'Error al cargar usuario'}));
          })
        )
      )
    )
  );

// noinspection TypeScriptValidateTypes
  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadCustomer),
      withLatestFrom(this.store.select(selectUser)),
      exhaustMap(([action, store]) =>
        this.customerService.consultarCliente(store.userId).pipe(
          map((data) => {
            UserActions.loadCustomerSuccess({customer: data})
            return UserActions.loadOrder()
          }),
          catchError((error) => {
            console.error('Error al cargar cliente:', error);
            return of(UserActions.loadCustomerFailure({error: 'Error al cargar cliente'}));
          })
        )
      )
    )
  );
  // noinspection TypeScriptValidateTypes
  loadOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadOrder),
      withLatestFrom(this.store.select(selectUser)),
      exhaustMap(([action, store]) =>
        this.pedidoService.listarPedidosDeUsuario(store.userId).pipe(
          map((data) => {
            console.log("ordenes", data)
            UserActions.loadOrderSuccess({orders: []})
            return CartActions.loadCart()
          }),
          catchError((error) => {
            console.error('Error al cargar las ordenes:', error);
            return of(UserActions.loadOrderFailure({error: 'Error al cargar ordenes'}));
          })
        )
      )
    )
  );


}


